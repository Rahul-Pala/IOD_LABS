const express = require ("express") //import express.. Use require for importing

const cors = require('cors')

const app = express()

const myroutes = require("./Routes/myTestRoutes") //IMPORT router here. Use any variable Name. Use relative Path.
                                                  //Now, myTestRoutes is copied to myroutes.

const port = 3000 //Assign a port

app.use(cors())
app.use('/calculator', myroutes) //All you do now is associate the Web Server application with the route you have imported. "/test" is the path and associated it with myroutes.
                           //So, "/test" is the path and myroutes is directing it to myTestRoutes

app.listen(port, () => 
{
    console.log("server has started on port 3000")
})