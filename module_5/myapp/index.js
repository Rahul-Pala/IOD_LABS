const express = require('express');
const testRoutes = 
require('./routes/myapproutes') //pointing to roots

const app = express()
const app2 = express() // creating many server applications

const routes = express.Router()

const port = 3000
const port2 = 3002

app.use('/', express.static('public')) //Why isn't this working


app.get('/hello', (req, res) => {
 res.send('Hello World!')
})

app2.get('/Rahul', (req, res) => {
    res.send('Chrismas is good!')
})

app2.get('/Pala', (req,res) => {
    res.send('Happy Birthday')
})

app.listen(port, () => {
 console.log(`Example app listening 
at http://localhost:${port}`)
})

app2.listen(port2, () => {
    console.log('running on 3002 mate')
}) 
