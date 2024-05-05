const express = require('express')

const app = express()
const app2 = express() // creating many servers
const app3 = express()

const port = 3000
const port2 = 3002
const port3 = 3003


app.get('/hello', (req, res) => {
 res.send('Hello World!')
})

app2.get('/Rahul', (req, res) => {
    res.send('Chrismas is good!')
})

app2.get('/Pala', (req,res) => {
    res.send('Happy Birthday')
})

app3.get('/software', (req, res) => {
    res.send('Finally')
})

app.listen(port, () => {
 console.log(`Example app listening 
at http://localhost:${port}`)
})

app2.listen(port2, () => {
    console.log('running on 3002 mate')
})

app3.listen(port3, () => {   //Help.. why isnt app3 working ??
    console.log('running on 3003')
})
