
window.addEventListener('load', function(){

	var socket = io();

	console.log("main.js loaded");

	socket.emit("log", "client connected");

});

