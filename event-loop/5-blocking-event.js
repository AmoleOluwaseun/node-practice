const http = require('http')

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.end('Home page1');
    }
    if(req.url === '/about'){
        //BLOCKING CODE
        for(let i=0; i<100; i++){
            for (let j=0; j<100; j++ ){

                console.log(i + " "+ j);
            }
        }
        res.end('About page');
    }
})

server.listen(5000, ()=>{
    console.log('server listening on port 5000.....');
})