import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Container} from '../components/Container/index';
import {StatusBar, KeyboardAvoidingView, Alert} from 'react-native';
import {Logo} from '../components/Logo/index';
import {InputWithButton} from '../components/TextInput/index';
import {ClearButton} from '../components/Buttons/index';
import {LastConverted} from '../components/Text/index';
import {Header} from '../components/Header/index';
//import {connectAlert} from '../components/Alert/index';
import {swapCurrency, changeCurrencyAmount, getInitialConversion} from '../actions/currencies';

class Home extends Component{

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        conversionRate: PropTypes.number,
        isFetching: PropTypes.bool,
        lastConvertedDate: PropTypes.object,
        primaryColor: PropTypes.string,
        //alertWithType: PropTypes.func,
        currencyError: PropTypes.string
    };

    componentWillMount() {
        this.props.dispatch(getInitialConversion());
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps);
        if(nextProps.currencyError && nextProps.currencyError !== this.props.currencyError) {
            Alert.alert(
                'Error',
                nextProps.currencyError,
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                {cancelable: false}
            );
            //this.props.alertWithType('error', 'Error', nextProps.currencyError.info);
        }
    }

    handleChangeText = (amount) => {
        this.props.dispatch(changeCurrencyAmount(amount));
    };

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Base Currency', type:  'base'});
    };

    handlePressQuoteCurency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency', type: 'quote'});
    };

    handleSwapeCurrency = () => {
        this.props.dispatch(swapCurrency());
    };

    handleOptionPress = () => {
        this.props.navigation.navigate('Options')
    };

    render() {
        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
        if(this.props.isFetching) {
            quotePrice = '...'
        }
        return(
            <Container backgroundColor={this.props.primaryColor}>
                <StatusBar hidden={false} translucent={false} barStyle="light-content"/>
                <Header onPress={this.handleOptionPress}/>
                <KeyboardAvoidingView behavior="padding">
                    <Logo tintColor={this.props.primaryColor}/>
                    <InputWithButton
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={this.props.amount.toString()}
                        keyboardType="numeric"
                        onChangeText={this.handleChangeText}
                        textColor={this.props.primaryColor}
                    />
                    <InputWithButton
                        buttonText={this.props.quoteCurrency}
                        editable={false}
                        onPress={this.handlePressQuoteCurency}
                        value={quotePrice}
                        textColor={this.props.primaryColor}
                    />
                    <LastConverted
                        base={this.props.baseCurrency}
                        quote={this.props.quoteCurrency}
                        conversionRate={this.props.conversionRate}
                        date={this.props.lastConvertedDate}
                    />
                    <ClearButton
                        onPress={this.handleSwapeCurrency}
                        text="Reverse Currencies"
                        disabled={this.props.isFetching}
                    />
                </KeyboardAvoidingView>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const conversionDate = conversionSelector.date || '';
    const rates = conversionSelector[`${baseCurrency}_${quoteCurrency}`] || {};
    return{
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates.val && rates.val[conversionDate] || 0,
        isFetching: conversionSelector.isFetching,
        lastConvertedDate: conversionSelector.date ? new Date(conversionDate) : new Date(),
        primaryColor: state.theme.primaryColor,
        currencyError: state.currencies.error
    };
};

export default connect(mapStateToProps)(Home);