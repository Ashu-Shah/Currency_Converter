import {StatusBar} from 'react-native';
import { Constants } from 'expo';
import {createStackNavigator} from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null
        }
    },
    Options: {
        screen: Options,
        navigationOptions: {
            headerTitle: 'Options'
        }
    },
    Themes: {
        screen: Themes,
        navigationOptions: {
            headerTitle: 'Themes'
        }
    }
}, {
    headerMode: 'screen'
});

const currencyListStack = createStackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({navigation}) => ({
            headerTitle: navigation.state.params.title
        })
    }
});

export default createStackNavigator({
    Home: {
        screen: HomeStack
    },
    CurrencyList: {
        screen: currencyListStack
    }
}, {
    mode: 'modal',
    headerMode: 'none',
    //cardStyle: {paddingTop: StatusBar.statusBarHeight}
});