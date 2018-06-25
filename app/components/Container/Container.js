import React from 'react';
import PropTypes from 'prop-types';
import {View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import ContainerStyles from './ContainerStyles';

const Container = ({children, backgroundColor}) => {
    const containerStyles = [ContainerStyles.container];
    if(backgroundColor) {
        containerStyles.push({backgroundColor})
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={containerStyles}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    )
};

Container.propTypes = {
    children: PropTypes.any,
    backgroundColor: PropTypes.string
};

export default Container;