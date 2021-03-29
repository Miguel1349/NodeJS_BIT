const express = require('express');
const htpp = require('http');
const socket_io = require('socket.io');

const app = express();
const server = htpp.createServer(app);
const io = socket_io(server);
app.use(express.static('client'));
let messages = [{
    text: 'Bienvenido al chat',
    alias: 'Miguel'
}];

io.on('connection', socket => {
    console.log(`Cliente conectado desde ${socket.handshake.address}`);
    socket.emit('messages', messages);
    socket.on('agregar-mensaje', data => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});

server.listen(3000, () => console.log('listen on localhost:3000'));