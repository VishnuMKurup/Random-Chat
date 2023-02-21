const express = require('express');
const path = require('path');
const http = require('http')
const {Server} = require('socket.io')

const PORT = process.env.PORT || 3000;

const ids = []

const app = express();
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=> {
    res.sendFile('public/inedx.html');
});

io.on('connection', (socket)=>{
    console.log("User connected..")
    socket.on('chat message', (msg)=>{
        console.log(`Message: ${msg}`);
        io.emit("chat message", msg);
    });
});

server.listen(PORT, ()=>{
    console.log('Server started running...');
});
