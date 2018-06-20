import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View, Platform, Linking, Alert} from 'react-native';
import { Constants } from 'expo';
import {ListItem, Separator} from '../components/List/index';
import {Ionicons} from '@expo/vector-icons';

const ICON_PREFIX = Platform.OS == 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component{

    static propTypes = {
        navigation: PropTypes.object
    };

    handlePressTheme = () => {
        this.props.navigation.navigate('Themes');
    };

    handleSitePress = () => {
        Linking.openURL('http://fixer.io').catch(() => {
            Alert.alert('Error', 'An error occured.', [{text: 'Ok'}], {cancelable: false})
        })
    };

    render() {
        return(
            <ScrollView>
                <ListItem
                    text="Theme"
                    onPress={this.handlePressTheme}
                    customIcon={<Ionicons color={ICON_COLOR} size={ICON_SIZE} name={`${ICON_PREFIX}-arrow-forward`}/>}
                />
                <Separator/>
                <ListItem
                    text="Fixer.io"
                    onPress={this.handleSitePress}
                    customIcon={<Ionicons color={ICON_COLOR} size={ICON_SIZE} name={`${ICON_PREFIX}-link`}/>}
                />
                <Separator/>
            </ScrollView>
        )
    }
}

export default Options;