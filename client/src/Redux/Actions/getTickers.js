import { updateTickers } from "../Reducers/tickersReducer";
import { getSocket } from '../socketConnect';

export function getTickers () {
    return async (dispatch) => {
        const socket = await getSocket()
        socket.emit('start');
        socket.on('ticker', async function(response) {
            const res = Array.isArray(response) ? response : [response];
            await dispatch(updateTickers(res))
        });
    }
}