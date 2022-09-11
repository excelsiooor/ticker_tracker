import { TICKER_OFF } from "../types";

export function offTicker (ticker) {
    return {
        type: TICKER_OFF,
        data: ticker,
    }
}