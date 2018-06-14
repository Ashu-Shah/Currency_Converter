import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#fff',
    $lightGray: '#f0f0f0',
    $border: '#e2e2e2',
    $inputText: '#797979',
    $darkText: '#343434'

    //$outline: 1,

});

export default () => <Options/>;