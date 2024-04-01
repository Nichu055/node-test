// CommonJS, every file is module
// module - info about current module (file)

const names = require('./4-names')//(to find the file)
const sayHi = require('./5-utils')//(to find the file)
const data = require('./6-alternative-flavor')
console.log(data)
require('./7-mind-grenade')
// sayHi('nichols');
// sayHi(names.john);
// sayHi(names.peter);