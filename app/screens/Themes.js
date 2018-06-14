import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import { Constants } from 'expo';
import {ListItem, Separator} from '../components/List/index';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple'
});

class Themes extends Component{
    handleThemePress = (color) => {
        console.log('Theme Press', color);
    };

    render() {
        return (
            <ScrollView>
                <View style={{backgroundColor: "#C2185B", height: Constants.statusBarHeight}} />
                <ListItem
                    text="Blue"
                    onPress={() => this.handleThemePress(styles.$blue)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$blue}
                />
                <Separator/>
                <ListItem
                    text="Orange"
                    onPress={() => this.handleThemePress(styles.$orange)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$orange}
                />
                <Separator/>
                <ListItem
                    text="Green"
                    onPress={() => this.handleThemePress(styles.$green)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$green}
                />
                <Separator/>
                <ListItem
                    text="Purple"
                    onPress={() => this.handleThemePress(styles.$purple)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$purple}
                />
                <Separator/>
            </ScrollView>
        )
    }
}

export default Themes;