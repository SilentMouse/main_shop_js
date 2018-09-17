import * as types from '../constants/currencyTypes';

export const setCurrency = () => ({
    type: types.SET_CURRENCY
});

export const setCurrencies = () => ({
    type: types.SET_CURRENCIES
});

export const ticker = () => ({
    type: types.TICKER
})

