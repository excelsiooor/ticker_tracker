import io from 'socket.io-client';

//pattern singleton

let socket = undefined

export async function getSocket() {
    if (socket === undefined) {
        socket = await io.connect('http://localhost:4000');
    }
    return socket;
}