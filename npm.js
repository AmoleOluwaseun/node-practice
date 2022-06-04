const amount = 8

if (amount < 10){
    console.log('small number');
}else{
    console.log('large number');
}

console.log('Hello world');

//to run press ctrl + `(opens terminal) and input "node _filename_.js"

setInterval(()=>{
console.log("hi")
}, 1000)


//to create package json "npm init -y"

const _lod = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _lod.flatMapDeep(items)
console.log(newItems);
console.log('Hello yooo');