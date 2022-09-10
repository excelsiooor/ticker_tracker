import {combineReducers} from "redux";
import {tickersReducer} from "./Reducers/tickersReducer";
import {delayReducer} from "./Reducers/delayReducer";

export const rootReducer = combineReducers({
    tickers: tickersReducer,
    delay: delayReducer
});