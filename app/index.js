import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux';

//import Home from './screens/Home';
//import CurrencyList from './screens/CurrencyList';
//import Options from './screens/Options';
//import Themes from './screens/Themes';
import Navigator from './config/routes';
//import {AlertProvider} from './components/Alert/index';
import store from './config/store';

EStyleSheet.build({
    $primaryBlackish: '#2a2a2a',
    $primaryBlue: '#2980b9',
    $primaryOrange: '#e67e22',
    $primaryGreen: '#16a085',
    $primaryPurple: '#8e44ad',

    $white: '#fff',
    $lightGray: '#f0f0f0',
    $border: '#e2e2e2',
    $inputText: '#797979',
    $darkText: '#343434'

    //$outline: 1,

});

export default () => (
    <Provider store={store}>
        <Navigator onNavigationStateChange={null}/>
    </Provider>
)