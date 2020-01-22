'use strict';

var server = require('net').createServer(function (socket) {
    console.log('> Connect to this public endpoint with clientB:', socket.remoteAddress + ':' + socket.remotePort);
}).listen(process.env.PORT || 5000, function (err) {
    if (err) return console.log(err);
    console.log('> (server) listening on:', server.address().address + ':' + server.address().port)
});
