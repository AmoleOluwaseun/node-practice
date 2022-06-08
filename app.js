const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res){
    // const text = fs.readFileSync('./context/big.txt', 'utf8')
    // res.end(text)

    const fileStream = fs.createReadStream('./context/big.txt', 'utf8')
    fileStream.on('open', ()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})

server.listen(5000)