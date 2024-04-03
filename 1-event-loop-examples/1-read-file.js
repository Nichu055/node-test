const { readFile } = require ('fs')
const { result } = require('lodash')

console.log ('stated a first tast')
// CHECK FILE PATH 
readFile('./content/first.txt','utf8' , (err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first tast')
})
console.log('starting next task')