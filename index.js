var socket = require('socket.io-client');

module.exports = function(callback, host, port) {
	host = host || 'localhost';
	port = port || '1947';

	socket.connect('http://'+host+':'+port+'/')
	.on('statechanged', callback);
}
