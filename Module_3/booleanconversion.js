let age = 10;

if(age < 14 && age >= 10)
console.log("young")

else
console.log("adult")

let height = "179cm";

if(height > "180cm")
console.log("tall")

else
console.log("average")

console.log( Boolean("") ) // false - empty string
console.log( Boolean(0) ) // false - zero value
console.log( Boolean(null) ) // false - no value
console.log( Boolean(undefined) ) // false - unknown value
console.log( Boolean(NaN) ) // false - not a number
console.log( Boolean("false") ) // true - non-empty string
console.log( Boolean(-1) ) // true - non-zero number
console.log(Boolean(8))

if ("") console.log('empty string is true') // implicit "" conversion to false - won't print msg
if (undefined) console.log('undefined is true') // implicit conversion to false - won't print msg
let agee=15
console.log( NaN ? 'NaN is true' : 'NaN is false' ) // NaN is false
console.log( 0 ? 'zero is true' : 'zero is false' ) // zero is false
console.log( "hello" ? 'hello is true' : 'hello is false' ) // hello is true
console.log(2 ? '2 is right' : '2 is wrong')
console.log(agee >12 && agee <20 ? 'Teenager' :'adult')

let good = true
console.log(good)