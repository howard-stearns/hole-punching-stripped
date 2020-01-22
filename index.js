'use strict';

var server = require('net').createServer(function (socket) {
    console.log('> connection from:', socket.remoteAddress + ':' + socket.remotePort);
    socket.on('data', function (data) {
        if (data === "c'est moi") {
            console.log('> Connect to this public endpoint with clientB:', socket.remoteAddress + ':' + socket.remotePort);
        }
    });
}).listen(process.env.PORT || 5000, function (err) {
    if (err) return console.log(err);
    console.log('> (server) listening on:', server.address().address + ':' + server.address().port)
});
