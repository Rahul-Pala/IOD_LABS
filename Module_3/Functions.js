function add(num1, num2)
{
    console.log(num1 + num2)
}

function subtract(num1, num2)
{
    console.log(num1 - num2)
}

function multiply(num1, num2)
{
    console.log(num1 * num2)
}

function divide(num1, num2)
{
    console.log(num1 / num2)
}

//call the function as below
add(2,3)
subtract(9,8)
multiply(2,2)
divide(100,2)

// 'function' keyword followed by the custom function name, then ()
function helloWorld() // we can include parameters inside the () as function variables
{ // function body is enclosed with curly brackets (braces)
 console.log('Hello world'); // can be one or multiple statements inside the function
}
helloWorld(); // once the function is defined, we need to call it to make it run/execute

//return

function addd(num1, num2)
{
    let result = num1 + num2
    return result
}

function sub(num1, num2)
{
    console.log (num1 - num2)
}

let valuereturn = addd(2,5);
console.log(valuereturn);
console.log(addd(3,3)) //shortcut

subtract (addd(10,10),3)

let resultofsubtract = sub(addd(20,20),3);

//function expression
const SayHi = function()
{
    console.log("Hello")
}
SayHi()

//Arrow Function

const Arrowfun = () => console.log("HI I am Arrow")
Arrowfun()

const Arrowaddition = (number1, number2) => {
    let result = number1 + number2
    return result
}
console.log(Arrowaddition(2,4))





