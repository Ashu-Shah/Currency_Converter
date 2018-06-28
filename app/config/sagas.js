// 1. Swape currency
// 2. Change base currency
// 3. Upon initial app load

import { takeEvery, select, call, put } from 'redux-saga/effects';
import {SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_RESULT, CONVERSION_ERROR} from '../actions/currencies';
import Settings from '../../settings.json';
import moment from 'moment';

//const BASE_URL = 'http://data.fixer.io/api/';
//const ACCESS_KEY = Settings.AccessKey;
const GET_DATE = moment(Date.now()).format('YYYY-MM-DD');
const BASE_URL = 'http://free.currencyconverterapi.com/api/v5/convert?q=';

//const getLatestRate = currency => fetch(`${BASE_URL}latest?access_key=${ACCESS_KEY}`);
const getLatestRate = currency => fetch(`${BASE_URL}${currency}&date=${GET_DATE}`);

function* fetchLatestConversionRates (action) {
    try {
        let currency = action.currency;
        if(currency === undefined) {
            currency = yield select(state => `${state.currencies.baseCurrency}_${state.currencies.quoteCurrency}`)
        }
        else {
            currency = yield select(state => `${action.currency}_${state.currencies.quoteCurrency}`)
        }

        const response = yield call(getLatestRate, currency);
        const result = yield response.json();

        if(result.error) {
            yield put({type: CONVERSION_ERROR, error: result.error})
        }
        else {
            let {date, results} = result;
            results.date = date;
            yield put({type: CONVERSION_RESULT, results})
        }
    }
    catch(e) {
        yield put({type: CONVERSION_ERROR, error: e.message})
    }
}

export default function* rootSaga() {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
};