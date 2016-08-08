var express = require('express');
var app  = express();
var http = require('http').Server(app);
var io   = require('socket.io')(http);
var PORT = 8080;

app.use("/", express.static( __dirname + '/../client' ));

io.on('connection', function(socket){
	
	console.log("socket connection");
	
	socket.on("log", function(msg){
		console.log("[socket] " + msg);
	});

});

http.listen(PORT, function(){
	console.log('listening on *:' + PORT);
});
