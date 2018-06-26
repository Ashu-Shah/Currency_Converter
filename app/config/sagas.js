// 1. Swape currency
// 2. Change base currency
// 3. Upon initial app load

import { takeEvery, select, call, put } from 'redux-saga/effects';
import {SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_RESULT, CONVERSION_ERROR} from '../actions/currencies';
import Settings from '../../settings.json';

const BASE_URL = 'http://data.fixer.io/api/';
const ACCESS_KEY = Settings.AccessKey;

const getLatestRate = currency => fetch(`${BASE_URL}latest?access_key=${ACCESS_KEY}`);

function* fetchLatestConversionRates (action) {
    try {
        let currency = action.currency;
        if(currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency)
        }
        const response = yield call(getLatestRate, currency);
        const result = yield response.json();

        if(result.error) {
            yield put({type: CONVERSION_ERROR, error: result.error})
        }
        else {
            yield put({type: CONVERSION_RESULT, result})
        }
    }
    catch(e) {
        yield put({type: CONVERSION_ERROR, error: e.message})
    }
    //getLatestRate()
    //.then((res) => res.json())
    //.then((res, err) => console.log('Response', res))
    //.catch (err => console.log('Error...', err));
}

export default function* rootSaga() {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
};