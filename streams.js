//create a big file

const {writeFileSync, writeFile} = require('fs')

for(i=0; i<10000; i++){
    writeFileSync('./context/big.txt', 'hello world '+i+'\n', {flag : 'a'})
}
console.log('Done');


//Read big file

const{createReadStream} = require('fs')

const stream = createReadStream('./context/big.txt')

stream.on('data', (result) =>{
console.log(result);
})

//Set chunk file size and encode file

const{createReadStream} = require('fs')

const stream = createReadStream('./context/big.txt',{
    highWaterMark: 90000,
    encoding: 'utf8',
})

stream.on('data', (result) =>{
    console.log(result);
})

stream.on('error', (err) =>{
    console.log(err)
})