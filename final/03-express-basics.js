const express = require ('express')
const app = express()

// app.get
app.get('/',(req,res)=>{
    console.log('user hit the server')
    res.status(200).send('homepage')
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

// app.all
app.all('*',(req,res)=>{
    res.status(404).send('<p>Page not found</p>')
})

// app.listen
app.listen(5000,()=>{
    console.log('server is listenn on port 5000')
})
// app.post
// app.put
// app.delete
// app.use

