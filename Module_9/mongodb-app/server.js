const express = require('express')
const app = express()
let userRoutes = require('./routes/userRoutes');
require("dotenv").config();
let dbConnect = require("./dbconnect");

app.use(express.json()) //This is required for posting data

app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
    });

const port = process.env.PORT || 3000

app.listen(port, () => {console.log(`server running on port ${port}`)})