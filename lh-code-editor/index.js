const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8080);

app.get('/',(req, res) => {
  res.json({"system": "code editor"});
});

io.on('connection', (socket) => {
  socket.emit('recivecode', { code: 'new code' });
  socket.on('sendcode', function (data) {
    console.log(data);
  });
});
