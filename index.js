var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// FUNCION QUE SE REALIZA AL RECIBIR UNA CONEXIÓN
// EN EL WEB SOCKET 
io.on('connection', (socket) => {
	console.log('CONNECTED');
	socket.on('TEMP', (msg) => {
		console.log(msg);
		if(msg == 1){
			io.emit('TEMP',"ON")
		}else{
			io.emit('TEMP', "OFF")
		}
	});
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});