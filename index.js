'use strict';
const HANDSHAKE = "c'est moi\n";

function clientLabel(socket) {
    return socket.remoteAddress + ':' + socket.remotePort;
}

var server = require('net').createServer(function (socket) {
    console.log('> connection from:', clientLabel(socket));
    socket.on('data', function (buffer) {
        const data = buffer.toString();
        if (data === HANDSHAKE) {
            console.log('> Connect to this public endpoint with clientB:', clientLabel(socket));
        } else {
            console.log('got data from', clientLabel(socket), buffer.length, 'bytes:', data);
        }
    });
    socket.on('end', function () {
	    console.log('connection closed from', clientLabel(socket));
	});

	socket.on('error', function (err) {
	    console.log('connection closed with err (' ,err, ') from', clientLabel(socket));
	});
}).listen(process.env.PORT || 5000, function (err) {
    if (err) return console.log(err);
    console.log('> (server) listening on:', server.address().address + ':' + server.address().port)
});
