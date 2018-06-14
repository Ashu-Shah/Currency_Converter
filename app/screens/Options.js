import React, {Component} from 'react';
import {ScrollView, View, Platform} from 'react-native';
import { Constants } from 'expo';
import {ListItem, Separator} from '../components/List/index';
import {Ionicons} from '@expo/vector-icons';

const ICON_PREFIX = Platform.OS == 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component{

    handlePressTheme = () => {
        alert('press theme');
    };

    handleSitePress = () => {
        alert('press site');
    };

    render() {
        return(
            <ScrollView>
                <View style={{backgroundColor: "#C2185B", height: Constants.statusBarHeight}} />
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