import React from 'react';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import Proptypes from 'prop-types';
import InputWithButtonStyles from './InputWithButtonStyles';
import color from 'color';

const InputWithButton = (props) => {
    const {buttonText, onPress, editable} = props;

    const undelayColor = color(InputWithButtonStyles.$buttonBackgroundColorBase).darken(
        InputWithButtonStyles.$buttonBackgroundColorModifier
    );

    const containerStyle = [InputWithButtonStyles.container];
    if(editable === false) {
        containerStyle.push(InputWithButtonStyles.containerDisabled)
    }

    return(
        <View style={containerStyle}>
            <TouchableHighlight
                style={InputWithButtonStyles.buttonContainer}
                onPress={onPress}
                underlayColor={undelayColor}
            >
                <Text style={InputWithButtonStyles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={InputWithButtonStyles.saperator}/>
            <TextInput style={InputWithButtonStyles.input} underlineColorAndroid="transparent" {...props}/>
        </View>
    )
};

InputWithButton.propTypes = {
    onPress: Proptypes.func,
    buttonText: Proptypes.string,
    editable: Proptypes.bool
};

export default InputWithButton;