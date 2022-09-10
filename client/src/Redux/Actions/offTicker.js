import { OFF_TICKER } from "../types";

export function offTicker (ticker) {
    return {
        type: OFF_TICKER,
        data: ticker,
    }
}