import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import ContainerStyles from './ContainerStyles';

const Container = ({children}) => (
    <View style={ContainerStyles.container}>
        {children}
    </View>
);

Container.propTypes = {
    children: PropTypes.any
};

export default Container;