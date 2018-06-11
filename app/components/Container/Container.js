import React from 'react';
import PropTypes from 'prop-types';
import {View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import ContainerStyles from './ContainerStyles';

const Container = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={ContainerStyles.container}>
            {children}
        </View>
    </TouchableWithoutFeedback>
);

Container.propTypes = {
    children: PropTypes.any
};

export default Container;