const express = require ("express") //Import express

const router = express.Router() //Create a Router

router.get("/", (req, res) => {  //Use the router to add the Routes
   //console.log(req)
    res.send("Hello World!!!")      //Now the route is added but its part of myTestRoutes.js.. but when
}                                 //you are executing the server its executing in index.js.
)                                 //So index.js should import the router and myTestRoutes should export the router

//EXERCISE 2 
router.get("/add", (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    res.status(200)
    res.json({result:sum})   //Calculator add method is added on the server side, not client side
}
)

router.get("/subtract", (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let subtraction = number1 - number2
    res.status(200)
    res.json({result:subtraction})
})

router.get("/multiply", (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let multiplication = number1 * number2
    res.status(200)
    res.json({result:multiplication})
})

router.get("/divide", (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let division = number1 / number2
    res.status(200)
    res.json({result:division})
})

module.exports = router           //Export the router .. And in index.js you need to import the router

//Since this server is running locally, you do type in the brower:
//http://127.0.0.1:3000/test