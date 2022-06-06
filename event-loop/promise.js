const {readFile} = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile)


const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

const start = async () => {
    try {
        const first = await getText('./context/first.txt');
        const second = await getText('./context/second.txt');
        console.log( first + "\n" + second);
    } catch (error) {
        console.log(error);
    }
    
    
}
start()


///////////////////////////////////////////////



const {readFile, writeFile} = require('fs')
const util = require('util');

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('./context/first.txt', 'utf8');
        const second = await readFilePromise('./context/second.txt', 'utf8');
        const result = console.log( first + "\n" + second);

        await writeFilePromise('./context/third.txt','Here are a few sentences \n' + first + '\n' + second + '\n','utf8');
    } catch (error) {
        console.log(error);
    }
    
    
}
start()


/////////////////////////////////////////////////


const {readFile} = require('fs');
const { result } = require('lodash');
const { resolve } = require('path');

const getText = (path) =>{
    return new Promise((resolve, reject) =>{
        readFile(path, 'utf8', (err, result) =>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

getText('./context/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))


/////////////////////////////////////
//BEST METHOD
/////////////////////////////////////


const {readFile, writeFile} = require('fs').promises

const start = async () => { 
    try {
        const first = await readFile('./context/first.txt', 'utf8');
        const second = await readFile('./context/second.txt', 'utf8');
        const result = console.log( first + "\n" + second);

        await writeFile('./context/third.txt','Here are a few sentences \n' + first + '\n' + second + '\n','utf8',{flag:'Your name'});
    } catch (error) {
        console.log(error);
    }

}
start()


