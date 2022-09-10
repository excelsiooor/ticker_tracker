import { 
    SET_DELAY,
    } from "../types"; 

const initialState = {
    timer: 0,
}

export function delayReducer (state = initialState, action) {

    switch(action.type) {

        case SET_DELAY:

            return {
                ...state,
                timer: action.data/1000
            }

        default: 
            return state
    }
}

//action creator
export const setDelay = (res) => ({type: SET_DELAY, data: res})