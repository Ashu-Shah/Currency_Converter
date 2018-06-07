import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Container} from '../components/Container/index';
import {StatusBar, Text, View, Platform} from 'react-native';
import { Constants } from 'expo';

const styles = EStyleSheet.create({
    statusBar: {
        paddingTop: Platform.OS == 'android' ? Constants.statusBarHeight : 0,
        //backgroundColor: 'pink'

    }
});

export default () => (
    <Container>
        <StatusBar hidden={false} translucent={false} barStyle="light-content"/>
        <View style={styles.statusBar}/>
        <Text style={{color: 'red'}}>Hello Baby...</Text>
    </Container>
);
