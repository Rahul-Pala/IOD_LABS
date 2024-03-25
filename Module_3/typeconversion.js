let x = 100
let y = "Rahul"
let z = true

console.log(typeof x)
console.log(typeof y)
console.log(typeof z)

let to_string=String(x)
console.log(typeof to_string)  // Explicit conversion


//Implicit conversion
console.log( "1" + 1 + 2 ) // 112 - string ‘1’ is concatenated with number 1 then number 2
console.log( 1 + 1 + "2" ) // 22 - number 1 is added to number 1 then concatenated with string ‘2
console.log("rahul" + "Pala")
console.log("Rahul" - 2-4)
console.log(4 + 6 + "Rahul")


//Explicit - because we are using a fucntion
console.log( Number(" 4 ") ) // 4 - trims spaces
console.log( Number(null) ) // 0 - intentionally empty value converts to 0
console.log( Number(undefined) ) // NaN - non-existent value is unknown
console.log( Number(false) ) // 0 - false converts to 0
console.log( Number(true) ) // 1 - true converts to 1
console.log( Number("") ) // 0 - empty string converts to 0
console.log( Number("not a number") ) // NaN - non-empty strings beginning with chars cannot conver
console.log(Number("10p"))
console.log(Number(" Helloo    "))
console.log(Number (true))

//implicit - we not using a function
console.log("6" / "2") // 3
console.log("6" * "2") // 12
console.log("6" - "2") // 4
console.log(+"6") // 
console.log("12" + "10")
console.log (1+1)
console.log("t" + 1)

let unknown = "6"; //explicit conversion

console.log(unknown + 6);
console.log(Number(unknown) + 20)



