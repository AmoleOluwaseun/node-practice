const EventEmitter = require('events');

const customEmitter = new EventEmitter()

//to listen for the event
customEmitter.on('Response', (name, id) =>{
    console.log('Data received : \n'+name+' And has an ID of '+id);
})

customEmitter.on('Response', () =>{
    console.log('Data received 2');
})

//to emit the event
customEmitter.emit('Response', 'Debbie', 34) 

////////////////////////////////////////////////

const http = require('http')

//Using event emitter API
const server = http.createServer()

//emits request event with "on" method
server.on('request', (req, res) =>{
    res.end('Welcome')
})

server.listen(5000)