import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Container} from '../components/Container/index';
import {StatusBar, Text, View, Platform} from 'react-native';
import { Constants } from 'expo';
import {Logo} from '../components/Logo/index';
import {InputWithButton} from '../components/TextInput/index';
import {ClearButton} from '../components/Buttons/index';
import {LastConverted} from '../components/Text/index';

const styles = EStyleSheet.create({
    statusBar: {
        paddingTop: Platform.OS == 'android' ? Constants.statusBarHeight : 0,
        //backgroundColor: 'pink'
    }
});

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component{

    handleChangeText = (text) => {
        console.log('change text', text)
    };

    handlePressBaseCurrency = () => {
        console.log('Press Base Currency')
    };

    handlePressQuoteCurency = () => {
        console.log('Press Quote Currency')
    };

    handleSwapeCurrency = () => {
        console.log('Swape Currency')
    };

    render() {
        return(
            <Container>
                <StatusBar hidden={false} translucent={false} barStyle="light-content"/>
                <View style={styles.statusBar}/>
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
            </Container>
        )
    }
}

export default Home;