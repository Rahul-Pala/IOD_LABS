

let one = 1;
let two = 2;
let three = 3;


// to increment by one (all the same):
one = one + 1; // new value of one is previous value + 1
console.log(one)
one += 1; // shorthand - add 1 to previous (also *=)
console.log(one)
one++; // increment previous value (by 1)
console.log(one)
// to decrement by one (all the same):
two = two - 1; // new value of two is previous value - 1
console.log(two)
two -= 1; // shorthand - minus 1 from previous (also /=)
console.log(two)
two--; // decrement previous value (by 1
console.log(two)

three +++
console.log(three)
console.log(three)
console.log(three)
console.log(three)

const bigint_valid = 1234567890123456789012345n;
const bigint_invalid = 1234567890123456789012345; // too large for standard integers
console.log(bigint_valid == bigint_invalid) // false

let studentname = "Rahul Pala"
let University = "IOD"
let percentage = 100

console.log(`The new student at ${University} is ${studentname}. He got ${percentage}`)

let ischeck = true
let ishello = false

console.log(ischeck)
console.log("!ischeck")
console.log("ishello")
console.log("!ishello")

let expirydate=null
expirydate = 23/2/3

if(expirydate!=null)
{
console.log("Good")
}

else
console.log("ohhohh");

let age;
let nullAge = null;
console.log(`${age} == ${nullAge} ? ${age == nullAge}`) // true (uses == to check equivalence)
console.log(`${age} === ${nullAge} ? ${age === nullAge}`) // false (uses === to check equality

let student = {
Firstname: "Rahul",
Lastname: "Pala",
age: 34,
Location: "Melbourne, Australia",
citizen: true,
}

console.log(student)
console.log(student.Firstname, student.age)

student.hobby = "sports"

console.log(student)

