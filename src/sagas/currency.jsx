import { delay } from 'redux-saga'
import { put, takeEvery,fork } from 'redux-saga/effects'

import * as types from "../constants/currencyTypes";
import autobahn from 'autobahn';

import store from "../store";

function tickerEvent (args,kwargs) {
    var pair = args[0]
    var price = args[1]
    var percentChange = args[4]
    var volume = args[5]
    var name = args[0]

    if (args[0].split("_")[0] == "USDT"){

        var tic = {};

        tic[pair] = {
            pair: pair,
            price: price,
            percentChange: percentChange,
            volume: volume,
            name: name
        }

        store.dispatch({type: types.TICKER,state: tic})

    }

}



function* watchTicker() {

    console.log("watch ticker")

    var wsuri = "wss://api.poloniex.com";
    var connection = new autobahn.Connection({
        url: wsuri,
        realm: "realm1"
    });

    connection.onopen = function (session) {
        session.subscribe('ticker', tickerEvent);
    }

    connection.onclose = function () {
        console.log("Websocket connection closed");
    }

    connection.open();

}

export default function* currencySaga() {
    // yield fork(watchTicker)
}
