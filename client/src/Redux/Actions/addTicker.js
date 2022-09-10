import { addActionTicker } from "../Reducers/tickersReducer";
import { getSocket } from '../socketConnect';

export function addTicker (ticker) {
    return async (dispatch) => {
        const socket = await getSocket()
        socket.emit('add', ticker);
        await await dispatch(addActionTicker())
    }
}