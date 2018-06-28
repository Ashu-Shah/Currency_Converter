import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View} from 'react-native';
import { Constants } from 'expo';
import {connect} from 'react-redux';

import {ListItem, Separator} from '../components/List/index';
import EStyleSheet from 'react-native-extended-stylesheet';
import {changePrimaryColor} from '../actions/theme';

const styles = EStyleSheet.create({
    $black: '$primaryBlackish',
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple'
});

class Themes extends Component{

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func
    };

    handleThemePress = (color) => {
        this.props.dispatch(changePrimaryColor(color));
        this.props.navigation.goBack();
    };

    render() {
        return (
            <ScrollView>
                <ListItem
                    text="Blackish"
                    onPress={() => this.handleThemePress(styles.$black)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$black}
                />
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

export default connect()(Themes);