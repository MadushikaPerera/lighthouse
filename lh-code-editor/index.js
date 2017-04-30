const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
let onlineUsers = [];
let sockets = {};

server.listen(8081);

app.get('/',(req, res) => {
  res.json({"system": "code editor"});
});

io.on('connection', (socket) => {

  // Event for user connecting to socket
  socket.on('online', (data) => {
      socket.name = data.username;
      onlineUsers.push(data);
      sockets[data.username] = socket;
      console.log('online');
  });

  // Event for user joining a group
  socket.on('join group', (data) => {
      var name = data.name;
      socket.join(name);
      socket.broadcast.to(name).emit('join group', { username: socket.name });
      console.log('join group');
  });

    socket.emit('recivecode', { code: 'new code' });

    socket.on('sendcode', function (data) {
      console.log(data);
    });





});
