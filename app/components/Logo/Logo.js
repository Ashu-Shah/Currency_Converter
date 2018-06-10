import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import LogoStyles from './LogoStyles';

const Logo = () => (
    <View style={LogoStyles.container}>
        <ImageBackground source={require('../../assets/images/background.png')} style={LogoStyles.imageBackground} resizeMode="contain">
            <Image source={require('../../assets/images/logo.png')} style={LogoStyles.logo} resizeMode="contain"/>
        </ImageBackground>
        <Text style={LogoStyles.logoTitle}>Currency Converter</Text>
    </View>
);

export default Logo;