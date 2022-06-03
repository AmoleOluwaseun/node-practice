const http = require('http');

const server = http.createServer((req, res)=>{
    //console.log(req);
    if(req.url === '/'){
        res.end('Welcome to the home page')
    }
    if(req.url === '/about'){
        res.end('Welcome to the about page')
    }

    // res.write('Welcome to our home page')
    //think of this as a break statement for if no condition is met
    
     res.end(`
        <h1>Oops! Error 404</h1>
        <p>We can't seem to find the page you requested</p>
        <a href="/"> Back home </a>
    `)
})

server.listen(5000);