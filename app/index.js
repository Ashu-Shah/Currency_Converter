import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#fff',
    $lightGray: '#f0f0f0',
    $border: '#979797',
    $inputText: '#797979',

    //$outline: 1,

});

export default () => <Home/>;