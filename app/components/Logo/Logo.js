import React, {Component} from 'react';
import {View, Text, Keyboard, Animated, Platform} from 'react-native';
import LogoStyles from './LogoStyles';

const ANIMATION_DURATION = 250;

class Logo extends Component{
    constructor(props) {
        super(props);

        this.containerImageWidth = new Animated.Value(LogoStyles.$largeContainerSize);
        this.imageWidth = new Animated.Value(LogoStyles.$largeImageSize);
    };

    componentWillMount() {
        this.keyboardShowListener = Keyboard.addListener(Platform.OS == 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', this.keyboardShow);
        this.keyboardHideListener = Keyboard.addListener(Platform.OS == 'ios' ? 'keyboardWillHide': 'keyboardDidHide', this.keyboardHide);
    };

    componentWillUnmount() {
        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();
    };

    keyboardShow = () => {
        Animated.parallel([
            Animated.timing(this.containerImageWidth, {
                toValue: LogoStyles.$smallContainerSize,
                duration: ANIMATION_DURATION
            }),
            Animated.timing(this.imageWidth, {
                toValue: LogoStyles.$smallImageSize,
                duration: ANIMATION_DURATION
            })
        ]).start();
    };

    keyboardHide = () => {
        Animated.parallel([
            Animated.timing(this.containerImageWidth, {
                toValue: LogoStyles.$largeContainerSize,
                duration: ANIMATION_DURATION
            }),
            Animated.timing(this.imageWidth, {
                toValue: LogoStyles.$largeImageSize,
                duration: ANIMATION_DURATION
            })
        ]).start();
    };

    render() {

        let containerImageStyle = [
            LogoStyles.imageBackground,
            {width: this.containerImageWidth, height: this.containerImageWidth}
        ];
        let imageStyle = [
            LogoStyles.logo,
            {width: this.imageWidth, height: this.imageWidth}
        ];

        return (
            <View style={LogoStyles.container}>
                <Animated.View style={containerImageStyle}>
                    <Animated.Image source={require('../../assets/images/logo-merge.png')} style={imageStyle} resizeMode="contain"/>
                </Animated.View>
                <Text style={LogoStyles.logoTitle}>Currency Converter</Text>
            </View>
        )
    }
}

export default Logo;