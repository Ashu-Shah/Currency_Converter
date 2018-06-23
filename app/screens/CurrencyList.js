import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import currencies from '../data/currencies';
import {ListItem, Separator} from '../components/List/index';
import {changeBaseCurrency, changeQuoteCurrency} from '../actions/currencies';

class CurrencyList extends Component{

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrencies: PropTypes.string
    };

    handlePress = (currency) => {
        const {type} = this.props.navigation.state.params;
        if(type === 'base') {
            this.props.dispatch(changeBaseCurrency(currency));
        }
        else if(type === 'quote') {
            this.props.dispatch(changeQuoteCurrency(currency));
        }
        this.props.navigation.goBack(null);
    };

    renderItem = ({item}) => {
        let comparisionCurrency = this.props.baseCurrency;
        if(this.props.navigation.state.params.type === 'quote') {
            comparisionCurrency = this.props.quoteCurrency
        }
        return (
            <ListItem
                text={item}
                selected={item == comparisionCurrency}
                onPress={() => this.handlePress(item)}
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

const mapStateToProps = state => ({
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency
});

export default connect(mapStateToProps)(CurrencyList);