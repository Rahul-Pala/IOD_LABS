//Question 1
console.log("" + 1 + 0) // 10
console.log("" - 1 + 0) // -1
console.log(true + false) // 1
console.log(!true) //false
console.log(6 / "3") //2
console.log("2" * "3") //6
console.log(4 + 5 + "px") // 9px
console.log("$" + 4 + 5) // $45
console.log("4" - 2) // 2
console.log("4px" - 2) //NaN
console.log(" -9 " + 5) // -9 5
console.log(" -9 " - 5) // -14
console.log(null + 1) //1
console.log(undefined + 1) //NaN
console.log(undefined == null) // true
console.log(undefined === null) //false
console.log(" \t \n" - 2) //-2

//Question 2
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four //34     //wrong answer. Calculating "three" + "four" as a string. correct by doing let three=3 and four=4
console.log(addition)
let multiplication = three * four //12
console.log(multiplication)
let division = three / four //0.75
console.log(division)
let subtraction = three - four //-1
console.log(subtraction)
let lessThan1 = three < four //true
console.log(lessThan1)
let lessThan2 = thirty < four //false //wrong answer. It's not calculating as a number but instead as a string. fix by four=4 and thirty=30
console.log(lessThan2)

//Question 3
if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')

//Question 4
let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}


