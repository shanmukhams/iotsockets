var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connect', (socket) => {
    console.log('a user connected')
    socket.send('Hello from server')
    socket.emit('greetings', 'Hello from server event');
      
    socket.on('message', (data) => {
        console.log(data);
    });

    socket.on('salutations', (data)=>{
        console.log(data)
    })
})

http.listen(3000, () => {
    console.log('listening on 3000')
})
