const n = 1.23456; // primitive floating point number
console.log(n.toFixed(2)) // 1.23 - fixed to 2 decimal places
console.log(n.toPrecision(10)) // 1.234560000 - fills or rounds to the exact number of digits
const hello = 'hello world' // primitive string
console.log(hello.toUpperCase()) // HELLO WORLD
console.log(hello.endsWith('world')) // true
console.log(n.toFixed(6))
console.log(hello.startsWith('world'))
console.log(n.toPrecision(50))
let big = "HI"
console.log(big.toLowerCase())
console.log(big.endsWith("HI"))
console.log(big.length)
console.log(big.slice(1))
let learning = "   Raaaal   "
console.log(learning.trim())
console.log(learning.split())


//STRING LIKE OBJECT. STRING REPRESENTATION OF AN OBJECT
const user = 
    {
    name: 'John',
    }
    console.log("User: " + user);
    // User: [object Object]

    const useer = {
        name: 'John',
        toString() {
        return this.name; // custom string value
        }
        }
        console.log("User: " + useer); // User: John
        console.log(useer)
        
    let student = {
        name: "Rahul",
        surname: "Pala",
        Qualification: "software engineer",
        salary: 160,
        toString() 
        {
            return this.name
        }
       }

       console.log(student)
       console.log(`The new students name is ${student}`)
       console.log("The new boys name is " + student)

       //NUMBER LIKE OBJECT. (OBJECT BEHAVES LIKE A NUMBER)
       const apple = {
        name: 'Apple',
        category: 'Granny Smith',
        price: 1.2,
        quantity: 10,
        valueOf() { // without this special function, we can’t multiply the object below
        return this.price;
        },
        valueOf(multi) {
            return this.price * this.quantity
        }
        }
        console.log(apple * 2) // 2.4
    
        //DECIMAL NUMBERS
        const billion1 = 1000000000 // 9 zeros - hard to read
        const billion2 = 1_000_000_000 // easier to read, underscores ignored
         const billion3 = 1e9 // exponential format
         console.log(billion1 === billion2) // true
         console.log(billion2 === billion3) // true

         const microSecs1 = 0.000001 // 6 decimal places - hard to read
         const microSecs2 = 0.000_001 // easier to read, underscores ignored
         const microSecs3 = 1.e-6 // exponential format
         console.log(microSecs1 === microSecs2) // true
         console.log(microSecs2 === microSecs3) // true

         //HEXADECIMAL NUMBERS
         const r = 0xff;
         const g = 0xff;
         const b = 0xff;
         const e =0x44;
         const white = `rgb(${r}, ${g}, ${b})`
         const newcolor = `rgb(${r}, ${e}, ${e})`
         console.log(white) // rgb(255, 255, 255)
         console.log(newcolor)

         //Bianry and octal numbers
         const mobile = 041234567
         console.log(mobile) // 8730999 - decimal equivalent
         const binary = 0b11111111 // binary form of 255
         const octal = 0o377 // octal form of 255
         console.log(binary) // 255
         console.log(binary === octal) // true

         //Base conversion
         //toString(base)

         const ff = 255
         const ee = 238
         const dd = 221
         let er4 = 78
         console.log(er4.toString(16))
         console.log(ff.toString(16)) // ff
         //convert from rgb colour code to hexadecimal
         console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`) // #ffeedd

         //Imprecision Calculation
         const toobig = 1e350 // 1 * 10350 - overflows storage
         console.log(toobig) // Infinity
         console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
         console.log(Number.MIN_VALUE)

         const point1 = 0.1; const point2 = 0.2;
console.log(`${point1} + ${point2} = ${point1 + point2}`) // 0.1 + 0.2 = 0.30000000000000004

console.log(point1 + point2)


// Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
console.log(9_999_999_999_999_999) // 16 digits, prints as 10000000000000000
console.log(Number.MAX_SAFE_INTEGER) // // Numeric literals with absolute values equal to 2^53 or greater are too large to berepresented accurately as integers.
console.log(9_999_999_999_999_999) // 16 digits, prints as 10000000000000000
console.log(Number.MAX_SAFE_INTEGER) // 9_007_199_254_740_99
console.log(9_007_199_254_740_99) === console.log(2e53)

//Tests:isFinite and isNAN (14)
console.log(isFinite(1/3)) // true, regular number
console.log(isFinite("string")) // false, because converts to NaN
console.log(isFinite(Infinity)) // false, because represents infinite number

let k = "rahul"
let t = 16
console.log(isFinite(k))
console.log(isFinite(t))

console.log(isNaN(NaN)) // true
console.log(NaN == NaN) // false
console.log(isNaN(k))
console.log(isNaN(t))

//ParseInt and ParseFloat
console.log("100" + "2")
console.log("100" / "2")
console.log(Number("100") + Number("2"))
console.log(Number("100") / Number("2"))


         
