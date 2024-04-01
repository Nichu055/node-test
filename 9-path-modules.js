const path = require('path')

//console.log(path.sep)

const filePath = path.join('/content' , 'subfolder' , 'test.txt') // to find the file

//console.log(filePath) // will show you how to find the file


const base =path.basename(filePath) // will show you the file at the end
//console.log(base)

const absolute = path.resolve(__dirname,'content' , 'subfolder' , 'test.txt'); 
console.log(absolute) // to the location of a file 