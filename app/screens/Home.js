import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Container} from '../components/Container/index';
import {StatusBar, KeyboardAvoidingView} from 'react-native';
import {Logo} from '../components/Logo/index';
import {InputWithButton} from '../components/TextInput/index';
import {ClearButton} from '../components/Buttons/index';
import {LastConverted} from '../components/Text/index';
import {Header} from '../components/Header/index';
import {swapCurrency, changeCurrencyAmount} from '../actions/currencies';

class Home extends Component{

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        conversionRate: PropTypes.number,
        isFetching: PropTypes.bool,
        lastConvertedDate: PropTypes.object
    };

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
            <Container>
                <StatusBar backgroundColo="red" hidden={false} translucent={false} barStyle="dark-content"/>
                <Header onPress={this.handleOptionPress}/>
                <KeyboardAvoidingView behavior="padding">
                    <Logo/>
                    <InputWithButton
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={this.props.amount.toString()}
                        keyboardType="numeric"
                        onChangeText={this.handleChangeText}
                    />
                    <InputWithButton
                        buttonText={this.props.quoteCurrency}
                        editable={false}
                        onPress={this.handlePressQuoteCurency}
                        value={quotePrice}
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
    const rates = conversionSelector.rates || {};
    return{
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date()
    };
};

export default connect(mapStateToProps)(Home);