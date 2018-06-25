import React, {Component} from 'react';
import {View, Text, Keyboard, Animated, Platform, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import LogoStyles from './LogoStyles';

const ANIMATION_DURATION = 250;

class Logo extends Component{

    static propTypes = {
        tintColor: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            containerImageWidth: new Animated.Value(LogoStyles.$largeContainerSize),
            imageWidth: new Animated.Value(LogoStyles.$largeImageSize)
        };
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
            Animated.timing(this.state.containerImageWidth, {
                toValue: LogoStyles.$smallContainerSize,
                duration: ANIMATION_DURATION
            }),
            Animated.timing(this.state.imageWidth, {
                toValue: LogoStyles.$smallImageSize,
                duration: ANIMATION_DURATION
            })
        ]).start();
    };

    keyboardHide = () => {
        Animated.parallel([
            Animated.timing(this.state.containerImageWidth, {
                toValue: LogoStyles.$largeContainerSize,
                duration: ANIMATION_DURATION
            }),
            Animated.timing(this.state.imageWidth, {
                toValue: LogoStyles.$largeImageSize,
                duration: ANIMATION_DURATION
            })
        ]).start();
    };

    render() {

        let containerImageStyle = [
            LogoStyles.imageBackground,
            {width: this.state.containerImageWidth, height: this.state.containerImageWidth}
        ];
        let imageStyle = [
            LogoStyles.logo,
            {width: this.state.imageWidth},
            this.props.tintColor ? {tintColor: this.props.tintColor} : null
        ];

        return (
            <View style={LogoStyles.container}>
                <Animated.View style={containerImageStyle}>
                    <Animated.Image
                        resizeMode="contain"
                        style={[StyleSheet.absoluteFill, containerImageStyle]}
                        source={require('../../assets/images/background.png')}
                    />
                    <Animated.Image
                        resizeMode="contain"
                        style={imageStyle}
                        source={require('../../assets/images/logo.png')}
                    />
                </Animated.View>
                <Text style={LogoStyles.logoTitle}>Currency Converter</Text>
            </View>
        )
    }
}

export default Logo;