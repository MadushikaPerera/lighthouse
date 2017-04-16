const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
let onlineUsers = [];
let sockets = {};

server.listen(3030);

app.get('/',(req, res) => {
  res.json({"system": "chat"});
});

io.on('connection', (socket) => {
  socket.emit('recive', {message:'Hello everyone',sender:'spongbob'});
  socket.on('send', function (data) {
    console.log(data);
    socket.emit('recive', {message:data.message,sender:data.sender});
  });
});
