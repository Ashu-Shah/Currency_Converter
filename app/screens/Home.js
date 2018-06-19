import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container} from '../components/Container/index';
import {StatusBar, KeyboardAvoidingView} from 'react-native';
import {Logo} from '../components/Logo/index';
import {InputWithButton} from '../components/TextInput/index';
import {ClearButton} from '../components/Buttons/index';
import {LastConverted} from '../components/Text/index';
import {Header} from '../components/Header/index';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component{

    static propTypes = {
        navigation: PropTypes.object
    };

    handleChangeText = (text) => {
        console.log('change text', text)
    };

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'});
    };

    handlePressQuoteCurency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'});
    };

    handleSwapeCurrency = () => {
        console.log('Swape Currency')
    };

    handleOptionPress = () => {
        alert('Running');
    };

    render() {
        return(
            <Container>
                <StatusBar backgroundColo="red" hidden={false} translucent={false} barStyle="dark-content"/>
                <Header onPress={this.handleOptionPress}/>
                <KeyboardAvoidingView behavior="padding">
                    <Logo/>
                    <InputWithButton
                        buttonText={TEMP_BASE_CURRENCY}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={TEMP_BASE_PRICE}
                        keyboardType="numeric"
                        onChangeText={this.handleChangeText}
                    />
                    <InputWithButton
                        buttonText={TEMP_QUOTE_CURRENCY}
                        editable={false}
                        onPress={this.handlePressQuoteCurency}
                        value={TEMP_QUOTE_PRICE}
                    />
                    <LastConverted
                        base={TEMP_BASE_CURRENCY}
                        quote={TEMP_QUOTE_CURRENCY}
                        conversionRate={TEMP_CONVERSION_RATE}
                        date={TEMP_CONVERSION_DATE}
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

export default Home;