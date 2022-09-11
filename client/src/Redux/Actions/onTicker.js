import { TICKER_ON } from "../types";

export function onTicker (ticker) {
    return {
        type: TICKER_ON,
        data: ticker,
    }
}