import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import ClearButtonStyles from './ClearButtonStyles';

const ClearButton = ({onPress, text, disabled}) => {
    let textStyle = [ClearButtonStyles.text];
    let icon = [ClearButtonStyles.icon];
    if(disabled) {
        textStyle.push({color: '#D3D3D3'});
        icon.push({tintColor: '#D3D3D3'})
    }

    return (
        <TouchableOpacity onPress={onPress} style={ClearButtonStyles.container} activeOpacity={0.5} disabled={disabled}>
            <View style={ClearButtonStyles.wrapper}>
                <Image source={require('../../assets/images/icon.png')} style={icon} resizeMode="contain"/>
                <Text style={textStyle}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

ClearButton.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    disabled: PropTypes.bool
};

export default ClearButton;