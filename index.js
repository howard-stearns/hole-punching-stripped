'use strict';
const HANDSHAKE = "c'est moi\n";

var server = require('net').createServer(function (socket) {
    console.log('> connection from:', socket.remoteAddress + ':' + socket.remotePort);
    socket.on('data', function (data) {
        if (data === HANDSHAKE) {
            console.log('> Connect to this public endpoint with clientB:', socket.remoteAddress + ':' + socket.remotePort);
        } else {
            console.log('got data from', socket.remoteAddress + ':' + socket.remotePort, data.length, 'characters:', data);
        }
    });
}).listen(process.env.PORT || 5000, function (err) {
    if (err) return console.log(err);
    console.log('> (server) listening on:', server.address().address + ':' + server.address().port)
});
