import React, {Component} from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import currencies from '../data/currencies';
import { Constants } from 'expo';
import {ListItem, Separator} from '../components/List/index';

const TEMP_CURRENT_CURRENCY = 'PAK';

class CurrencyList extends Component{

    //constructor(props) {
    //    super(props);
    //}

    handlePress(item) {
        console.log('Press Row ==>', item)
    };

    renderItem = ({item}) => {
        return (
            <ListItem
                text={item}
                selected={item == TEMP_CURRENT_CURRENCY}
                onPress={() => this.handlePress(item)}
            />
        )
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{backgroundColor: "#C2185B", height: Constants.statusBarHeight}} />
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