import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers/index';

const middileware = [];
if(process.env.NODE_ENV === 'development') {
    middileware.push(logger);
}

export default createStore(reducers, applyMiddleware(...middileware));