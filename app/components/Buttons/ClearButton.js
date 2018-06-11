import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import ClearButtonStyles from './ClearButtonStyles';

const ClearButton = ({onPress, text}) => (
    <TouchableOpacity onPress={onPress} style={ClearButtonStyles.container} activeOpacity={0.5}>
        <View style={ClearButtonStyles.wrapper}>
            <Image source={require('../../assets/images/icon.png')} style={ClearButtonStyles.icon} resizeMode="contain"/>
            <Text style={ClearButtonStyles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

ClearButton.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string
};

export default ClearButton;