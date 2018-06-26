import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middileware = [sagaMiddleware];
if(process.env.NODE_ENV === 'development') {
    middileware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middileware));

sagaMiddleware.run(rootSaga);

export default store;