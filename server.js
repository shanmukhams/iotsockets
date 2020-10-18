var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/ui/index.html');
});
let counter = '0';
FPS = 10
io.on('connect', (socket) => {
    console.log('a user connected')

    setInterval(() => {
        socket.emit('sendimage', counter);
      }, 1000/FPS);

    var image;
    socket.on('image', (data)=>{
        console.log(data.substring(0,8))
        counter = data;        
    })

    socket.on('frompy', (data)=>{
        console.log(data.substring(0,8))
               
    })
    
    
})

http.listen(3000, () => {
    console.log('listening on 3000')
})
