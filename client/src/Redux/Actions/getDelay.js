import { setDelay } from "../Reducers/delayReducer";
import { getSocket } from '../socketConnect';

export function getDelay (time) {
    return async (dispatch) => {
        const socket = await getSocket()
        socket.emit('set-interval', time);
        socket.on('interval', async function(res) {
            await dispatch(setDelay(res))
        })
    }
}