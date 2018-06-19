import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, StatusBar} from 'react-native';
import currencies from '../data/currencies';
import {ListItem, Separator} from '../components/List/index';

const TEMP_CURRENT_CURRENCY = 'PAK';

class CurrencyList extends Component{

    //constructor(props) {
    //    super(props);
    //}

    static propTypes = {
        navigation: PropTypes.object
    };

    handlePress = () => {
        this.props.navigation.goBack(null);
    };

    renderItem = ({item}) => {
        return (
            <ListItem
                text={item}
                selected={item == TEMP_CURRENT_CURRENCY}
                onPress={this.handlePress}
            />
        )
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={currencies}
                    renderItem={this.renderItem}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}

                />
            </View>
        )
    }
}

export default CurrencyList;