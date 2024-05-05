const express = require ("express") //Import express
const myCalculatorcontroller = require("../Exercise5_controllers/CalculatorController")
const router = express.Router() //Create a Router

router.get("/", (req, res) => {  //Use the router to add the Routes
   //console.log(req)
    res.send("Hello World!!!")      //Now the route is added but its part of myTestRoutes.js.. but when
}                                 //you are executing the server its executing in index.js.
)                                 //So index.js should import the router and myTestRoutes should export the router

//EXERCISE 2 
router.get("/add", (req, res) => {
    myCalculatorcontroller.Add(req, res)
}
)

router.get("/subtract", (req, res) => {
    myCalculatorcontroller.Substract(req, res)
})

router.get("/multiply", (req, res) => {
    myCalculatorcontroller.Multiply(req, res)
})

router.get("/divide", (req, res) => {
    myCalculatorcontroller.Divide(req, res)
})

module.exports = router           //Export the router .. And in index.js you need to import the router

//Since this server is running locally, you do type in the brower:
//http://127.0.0.1:3000/test