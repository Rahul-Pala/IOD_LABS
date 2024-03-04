function hello()
{
console.log("Hello")
}

function myname()
{
   console.log("Rahul")
}

hello()
myname()

var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('i am a fruit.');
console.dir(result);    // Score: -2, Comparative: -0.666

var carname;
let carname1;
const carname3 = "lambo";

carname="toyota"
carname1="Porch";

console.log(carname)
console.log(carname1)
console.log(carname3)

let score = new Array()
