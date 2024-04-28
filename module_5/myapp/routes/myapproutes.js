const express = require('express');
const router = express.Router()

   router.get('/hello', (req, res) => {
    res.send('Hello World!')
   })
   
   router.get('/Rahul', (req, res) => {
       res.send('Chrismas is good!')
   })
   
   router.get('/Pala', (req,res) => {
       res.send('Happy Birthday')
   })

   module.exports = router