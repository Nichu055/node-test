const os = require('os')

//info of user

const user =os.userInfo()
console.log(user)

// method to show how long the pc has been up


console.log(`The system uptime is ${os.uptime()} seconds`)

const currentos ={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentos)