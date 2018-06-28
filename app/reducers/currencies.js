import {
    SWAP_CURRENCY,
    CHANGE_CURRENCY_AMOUNT,
    CHANGE_BASE_CURRENCY,
    CHANGE_QUOTE_CURRENCY,
    GET_INITIAL_CONVERSION,
    CONVERSION_RESULT,
    CONVERSION_ERROR
} from '../actions/currencies';

const initialState = {
    baseCurrency: 'USD',
    quoteCurrency: 'PKR',
    amount: 100,
    conversions: {},
    error: null
};

const setConversions = (state, action) => {
    let conversion = {
        isFetching: true,
        date: '',
        rates: {}
    };

    if(state.conversions[action.currency]) {
        conversion = state.conversions[action.currency]
    }

    return {
        ...state.conversions,
        [action.currency]: conversion
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SWAP_CURRENCY:
            return {
                ...state,
                baseCurrency: state.quoteCurrency,
                quoteCurrency: state.baseCurrency,
                conversions: {
                    ...state.conversions,
                    [state.quoteCurrency]:{
                        isFetching: true
                    }
                }
            };
        case CHANGE_CURRENCY_AMOUNT:
            return {
                ...state,
                amount: action.amount || 0
            };
        case CHANGE_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: action.currency,
                conversions: setConversions(state, action)
            };
        case CHANGE_QUOTE_CURRENCY:
            return {
                ...state,
                quoteCurrency: action.currency
            };
        case GET_INITIAL_CONVERSION:
            return {
                ...state,
                conversions: setConversions(state, {currency: state.baseCurrency})
            };
        case CONVERSION_RESULT:
            return {
                ...state,
                baseCurrency: action.results[`${state.baseCurrency}_${state.quoteCurrency}`].fr,
                conversions: {
                    ...state.conversions,
                    [action.results[`${state.baseCurrency}_${state.quoteCurrency}`].fr]: {
                        isFetching: false,
                        ...action.results
                    }
                }
            };
        case CONVERSION_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
};

export default reducer;