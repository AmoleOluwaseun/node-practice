const { readFile, writeFile } = require('fs')

readFile('./context/first.txt','utf8', (err, result) =>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;

    readFile('./context/second.txt','utf8', (err, result2) =>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./context/result-async.txt','Here are a few sentences \n' + first + '\n' + second + '\n', 'utf8', (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
})