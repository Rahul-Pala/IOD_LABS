"use strict";
 let Models = require("../models"); // matches index.js. //importing models - we wrote the code User.js
 //that has a schema. It will ake use of this schema to access the database and get the User records 
 //as well as create a record in the database.

 const getUsers = (res) => {
    // finds all users. 
    Models.User.find({}) //Got from models index.js. //Using Find method here. //Read operation
    //find with an empty object will find all the Users in the Users collection.
        .then(data => res.send({result: 200, data: data})) //Promise
        //Then we'll just use the data and send the response with an object.The result is 200 wins. 
        //Success and data is data. Whatever the data that is retribute, it's like a array of Json objects.
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })  
}
 const createUser = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data)
    new Models.User(data).save() //Post operation. thats why new Models.User.
    //In Mongoose, the insertone or insertmany will be called behind the scene when you call save.
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })  
}

const updateUser = (req, res) => {
    // updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

   const deleteUser = (req, res) => {
    // deletes the user matching the ID from the param
    Models.User.findByIdAndDelete(req.params.id)
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }
   
 module.exports = {
   getUsers, createUser, updateUser, deleteUser //export back both the Users.
   //Every routes must be internally calling the controller logic. 
   //So for the routes to be able t ocall the controller logic, those controller logic must be accessible 
   //inside the routes file.
 }