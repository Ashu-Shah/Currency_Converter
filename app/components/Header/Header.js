import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import HeaderStyles from './HeaderStyles';

const Header = ({onPress}) => (
    <View style={HeaderStyles.container}>
        <TouchableOpacity onPress={onPress} style={HeaderStyles.button} activeOpacity={0.5}>
            <Image source={require('../../assets/images/gear.png')} resizeMode="contain" style={HeaderStyles.icon}/>
        </TouchableOpacity>
    </View>
);

Header.propTypes = {
    onPress: PropTypes.func
};

export default Header;