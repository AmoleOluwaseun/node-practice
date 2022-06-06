//Creating and calling inbuilt modules
//
const os = require('os')

//To find user info
//
const user = os.userInfo()
// can alaso be called as const {userInfo} = require('os')
console.log(user)

//to find system's uptime
//
console.log('System\'s uptime is ' + os.uptime() + ' yeahhhh!! ')

//to write and read from files(synchronus)
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./context/first.txt', 'utf8')
const second = readFileSync('./context/second.txt', 'utf8')

console.log(first, second);

writeFileSync('./context/result.txt', 'Here are a few sentences \n' + first + '\n' + second, {flag:'a'})
 
//to write and read from files(Asynchronus)

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