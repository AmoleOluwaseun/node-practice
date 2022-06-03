//to create package json "npm init -y"

const _lod = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _lod.flatMapDeep(items)
console.log(newItems);