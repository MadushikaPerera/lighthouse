exports = module.exports = function(io, sockets, onlineUsers) {

    io.on('connection', (socket) => {

        // 用户上线
        socket.on('online', function(data) {
            socket.name = data.username;
            onlineUsers.push(data);
            sockets[data.username] = socket;
            socket.join('Group');
            io.emit('online', data);
            console.log('online');
        });


        // 加入群组
        socket.on('join group', (data) => {
            var name = data.name;
            socket.join(name);
            socket.broadcast.to(name).emit('join group', { username: socket.name });
            console.log('join group');
        });


        // 离开群组
        socket.on('leave group', (data) => {
            var name = data.name;
            socket.broadcast.to(name).emit('leave group', { username: socket.name });
            socket.leave(name);
            console.log('leave group');
        });


        // 创建群组
        socket.on('new group', (data) => {
            socket.broadcast.emit('new group', data);
            console.log('new group');
        });


        // 发送信息
        socket.on('new message', (data) => {
            if (!data.private) {
                socket.broadcast.to(data.target).emit('new message', data);
            } else {
                if (sockets[data.target]) {
                    sockets[data.target].emit('new message', data);
                }
            }
            console.log('new msg');
        });


        // 用户下线
        socket.on('offline', () => {
            for (var i = 0, len = onlineUsers.length; i < len; i++) {
                if (onlineUsers[i] && onlineUsers[i].username === socket.name) {
                    onlineUsers.splice(i, 1);
                    delete sockets[socket.name];
                    socket.broadcast.emit('offline', {
                        username: socket.name
                    });
                }
            }
            console.log('offline');
        });


        // 用户断开连接
        socket.on('disconnect', () => {
            for (var i = 0, len = onlineUsers.length; i < len; i++) {
                if (onlineUsers[i] && onlineUsers[i].username === socket.name) {
                    onlineUsers.splice(i, 1);
                    delete sockets[socket.name];
                    socket.broadcast.emit('offline', {
                        username: socket.name
                    });
                }
            }
        });
        console.log('disconnect');
    });
};
