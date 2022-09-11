import { 
    GET_TICKERS,
    TICKER_OFF,
    TICKER_ON,
    ADD_TICKER,
    DELETE_TICKER
    } from "../types"; 

const initialState = {
    tickers: [],
    exeptions: []
}

export function tickersReducer (state = initialState, action) {

    switch(action.type) {
        case GET_TICKERS:

            //filtering the recieving data through 
            //an array of exeptions by id of ticker
            const exeptionFilter = action.data.filter(i => {
                return  !state.exeptions.includes(i.id)
            })
            //save tickers that will be not updating
            const oldData = state.tickers.filter(i => {
                return  state.exeptions.includes(i.id)
            })
            //save all to a new array and sorted
            const sortedData = [...exeptionFilter, ...oldData]
            sortedData.sort((a,b) => {
                if (a.name === b.name){
                    return a.id >= b.id ? 1 : -1
                } else {
                    return a.name >= b.name ? 1 : -1
                }
            })

            return {
                ...state,
                tickers: sortedData
            }

        case TICKER_OFF:

            //add new exeptions
            state.exeptions.push(action.data)

            return {
                ...state
            }

        case TICKER_ON:

            //remove exeptions 
            for( let i = 0; i < state.exeptions.length; i++){ 
                if ( state.exeptions[i] === action.data) { 
                    state.exeptions.splice(i, 1); 
                }
            }
            return {
                ...state
            }

        case ADD_TICKER:
            return{
                ...state
            }

        case DELETE_TICKER:
            return{
                ...state
            }

        default: 
            return state
    }
}

//action creator
export const updateTickers = (res) => ({type: GET_TICKERS, data: res})
export const addActionTicker = (res) => ({type:ADD_TICKER, data: res})
export const deleteActionTicker = (res) => ({type:DELETE_TICKER, data: res})