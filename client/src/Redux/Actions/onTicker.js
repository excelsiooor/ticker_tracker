import { ON_TICKER } from "../types";

export function onTicker (ticker) {
    return {
        type: ON_TICKER,
        data: ticker,
    }
}