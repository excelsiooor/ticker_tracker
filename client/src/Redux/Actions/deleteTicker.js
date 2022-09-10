import { deleteActionTicker } from "../Reducers/tickersReducer";
import { getSocket } from '../socketConnect';

export function deleteTicker (id) {
    return async (dispatch) => {
        const socket = await getSocket()
        socket.emit('delete', id);
        await dispatch(deleteActionTicker())
    }
}