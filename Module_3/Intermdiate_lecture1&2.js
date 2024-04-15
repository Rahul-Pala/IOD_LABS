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
console.log(Number("4") / Number("2px")) 
console.log(Number("100") / parseInt("2px"))

//Strings
const guestList = `Guests: \n\t- John \n\t- Pete \n\t- Mary`
console.log(guestList)

//comparing strings
console.log( 'A'.codePointAt(0) ) // 90
console.log( String.fromCodePoint(90) ) // Z

for(var i=65; i<=90; i++)
{
    console.log(String.fromCodePoint(i))
}

//Manipulating Strings
const string = 'I could be anything you like'
console.log(string.length) // 28 - string is 28 characters long
console.log(string.indexOf('anything')) // 11 - starting at 0 for 'I'
console.log(string.substring(20)) // 'you like' - substring starting at position 20
console.log(string.toUpperCase()) // I COULD BE ANYTHING YOU LIKE
console.log(string + ' plus more') // I could be anything you like plus more

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.startsWith('The')) // true - case sensitive
console.log(sentence.endsWith('dog')) // false - needs the full stop
console.log(sentence.split(' ')) // splits into multiple strings using the given separator
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
console.log(sentence.slice(4, 10)) // quick - gets the section between chars 4 and 10
console.log(sentence.replace('quick', 'slow')) // The slow brown fox jumps over the lazy dog.
console.log(" extra spaces ".trim()) // extra spaces - trims whitespace from start and end

//Arrays
const arr1 = new Array(1,2,3); // constructor, not often used
const arr2 = [1, 2, 3]; // array literal, much more common
console.log(arr1); // [ 1, 2, 3 ] - both do the same
console.log(arr2); // [ 1, 2, 3 ] - both do the same

//POP
const fruits = ['Apple', 'Orange', 'Pear']
const lastFruit = fruits.pop() // removes and returns the last item
console.log(lastFruit); // Pear
console.log(fruits); // [ 'Apple', 'Orange' ]

//PUSH
fruits.push('Banana') // adds to the end of the array
console.log(fruits); // [ 'Apple', 'Orange', 'Banana' ]

//Shift
firstFruit = fruits.shift() // removes and returns the first item
console.log(firstFruit) // Apple
console.log(fruits) // [ 'Orange', 'Pear' ]

//Unshift
fruits.unshift('Banana') // adds to the beginning of the array
console.log(fruits) // [ 'Banana', 'Orange', 'Pear' ]

//Internals
const fruits1 = ['Apple', 'Orange', 'Pear']
const fruits2 = fruits1 // refers to same memory location
fruits1.push('Banana') // add new item to the end of fruits1
console.log(fruits2) // [ 'Apple', 'Orange', 'Pear', 'Banana' ]
// fruits2 reflects the same change made to fruits1 since they are both references to the same place (Reference types)
console.log('fruit at index 0: '+fruits1[0]) // Apple - accessed using numeric index 0
console.log('fruit at index 1: '+fruits1[1]) // Orange - accessed using numeric index 1

//Multidimentional Arrays
const matrix = [ // 3x3 matrix
 [1, 2, 3], // row 0
 [4, 5, 6], // row 1
 [7, 8, 9] // row 2
]
console.log(matrix[1][1]) // 5, the value in the middle
console.log(matrix[2][1])

//to String method
const numbers = [1, 2, 3]
const strings = ["one", "two", "three"]
const empty = []
console.log('Numbers: ' + numbers) // Numbers: 1,2,3
console.log('Strings: ' + strings) // Strings: one,two,three
console.log('Empty: ' + empty) // Empty:

//2 ways to concatenate Array. e.g.,
const workmates = ['Rahul', 'Ali','Ana']
console.log("The superstars at work are " + workmates)
console.log(`The best workers are ${workmates}`)

//Splice method
const spliceArray = ["I", "study", "JavaScript", "right", "now"]
const removed = spliceArray.splice(0, 3, "Let's", "dance")
console.log(removed) // [ 'I', 'study', 'JavaScript' ] start from 0 and remove 3 items. Removed items is I study javascript.
console.log(spliceArray) // [ "Let's", 'dance', 'right', 'now' ]

//Slice
const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
const sliced = sliceArray.slice(0, 3) // start at the beginning, get items up to index 3
const endSliced = sliceArray.slice(-3) // start at the end, get last 3 items
console.log(sliced) // [ 'red', 'orange', 'yellow' ]
console.log(endSliced) // [ 'blue', 'indigo', 'violet' ]
console.log(sliceArray) // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
console.log(sliceArray.slice(3,5))

const copyofslicearray = sliceArray.slice(0, sliceArray.length)
copyofslicearray.pop()
console.log(copyofslicearray)

//Concat Arrays
const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = [7,8,9]
const combined = array1.concat(array2, array3)
console.log(combined) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(combined.concat(10, 11)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

const customer1 = {
    Name: "Rahul",
    age: 34,
}
 const newarray = ["Rahul", customer1, array1]

 console.log(customer1)
 console.log(newarray)

 const newwaar = newarray[1]
 console.log(newwaar["Name"])

//forEach method
const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']
hobbits.forEach((hobbit, index) =>    //hobbit and index are the parameters for this function.
{ // usually we use an arrow function here
 console.log(`${index}: ${hobbit}`) // runs once for every item in array
 if(hobbit.startsWith('S'))  //starting with S
    console.log(`${hobbit} and ${index}`)
})

console.log(hobbits.indexOf(`Samwise`))  //indexOF

const newarrow = () =>{       //Calling Arrow function
    console.log(`elloo`)

}
 newarrow()

 //indexOf Method
const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']
let bIndex = marks.indexOf('B-')
let eIndex = marks.indexOf('E')
// first index is always 0
console.log(marks[bIndex] + ' is at index: ' + bIndex) // B- is at index: 2
console.log(eIndex) //-1, since not found
console.log(marks.indexOf('C+'))

if(marks.indexOf(`Rahul`) != -1)
{
    console.log('Rahul exists in the array')
}
else
console.log('Rahul does not exist in array')


//lastindexOf
const markks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']
let bIndexFirst = markks.indexOf('B-')
let bIndexLast = markks.lastIndexOf('B-')
console.log(markks[bIndexFirst] + ' is first at: ' + bIndexFirst) // B- is first at: 2
console.log(markks[bIndexLast] + ' is last at: ' + bIndexLast) // B- is last at: 6

console.log(markks.lastIndexOf("B-"))

//Find method
const products = [
 { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
 { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
 { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' }
]
// we usually use an arrow function - runs once for each array element until condition is true
let jeans = products.find(productt => productt.title == 'Denim Jeans') // returns matching item
let shirt = products.find(product => product.category == 'Shirts') // returns matching item
console.log(jeans) // { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' }
console.log(shirt) 

const chrisamas = [
    {datte: "25.12.1989", location: "worldwide" },
    {datte: 26, fun: "very"}
]

let chrismaslocation = chrisamas.find(xmas => xmas.location =='worldwide')
console.log(chrismaslocation)

//Filter method
const pproducts = [
 { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
 { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
 { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
 { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' }
]
// we usually use an arrow function - runs once for each element, returns array of matches
let shirts = pproducts.filter(product => product.category == 'Shirts')
let under50 = pproducts.filter(product => product.price < 50)
console.log(shirts) // 2 matching items in shirts array
console.log(under50) // 3 matching items in under50 array

//MAP method
let titles = products.map(product => product.title) //For products array, go through each product and extract the title. 
let h2titles = products.map(product => '<h2>'+product.title+'</h2>')
let raisedPrices = products.map(product => ({...product, price: product.price + 5}) )
console.log(titles) // [ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ] you have transformed as array of objects to an array of strings
console.log(h2titles) // [ '<h2>Sleeveless Tee</h2>', "<h2>Men's Hoodie</h2>", '<h2>Denim Jeans</h2>', '<h2>Ladies Tee</h2>' ]
console.log(raisedPrices) // all prices increased by $5

//Sort method
products.sort( (product1, product2) => product1.price - product2.price )
console.log(products) // original array is modified to new low-high price sorting order: 1,4,3,2
products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1 )
console.log(products) // original array is modified to new title sorting order: 3,4,2,1

const nnumbers = [4,8,1,5,66,23,41]
console.log( nnumbers.sort() ) // [ 1, 23, 4, 41, 5, 66, 8 ] : string comparisons
console.log( nnumbers.sort((num1, num2) => num1 - num2) ) 

const stringNums = ["1", "81", "41", "102", "35", "1004"]
console.log( stringNums.sort() ) // [ '1', '1004', '102', '35', '41', '81' ] : string comparisons
console.log( stringNums.sort((a, b) => a - b) ) 

const sstringNums = ["1", "81", "41", "102", "35", "1004"]
const sortedNums = [...sstringNums].sort() // CLONING
console.log(sstringNums) // [ '1', '81', '41', '102', '35', '1004' ]
console.log(sortedNums) // [ '1', '1004', '102', '35', '41', '81' 

//Reverse method
const elements = ['Wind', 'Water', 'Fire', 'Air']
const reversed1 = elements.reverse() // modifies the original
const reversed2 = [...elements].reverse() // clone first to preserve the original
console.log(elements) // [ 'Air', 'Fire', 'Water', 'Wind' ]
console.log(reversed2) // [ 'Wind', 'Water', 'Fire', 'Air' ] (reversed twice)

//Join method
const eelements = ['Wind', 'Water', 'Fire', 'Air']
console.log( eelements.join() ) // Wind,Water,Fire,Air
console.log( eelements.join('    ') ) // Wind Water Fire Air
console.log( eelements.join('= ') ) // Wind; Water; Fire; Air

//Reduce method
const productss = [
 { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
 { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
 { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
] // initial (below) should be 0 for reliability in calculating totals
const totalPrice = productss.reduce((currentTotal, currentProduct) => currentTotal + currentProduct.price, 0)
const totalQty = productss.reduce((currentQty, currentProduct) => currentQty + currentProduct.quantity, 0)
console.log(totalPrice) // 128.85000000000002
console.log(totalQty) //10

//Array combinations
const prodducts = [
 { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
 { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
 { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
]
// get the titles of all products over $25:
const over25Titles = prodducts.filter(prod => prod.price > 25).map(prod => prod.title)
console.log(over25Titles) // [ "Men's Hoodie", 'Denim Jeans' ]
// list product ids and titles in descending order of price:

const hiloProducts = [...prodducts].sort((p1, p2) => p1.price - p2.price).reverse()
 .map(prod => ({id: prod.id, title: prod.title}))
console.log(hiloProducts) 
// [ {id: 2, title: "Men's Hoodie"}, {id: 3, title: 'Denim Jeans'}, {id: 1, title: 'Sleeveless Tee'} ]
 
//Iterables
const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']
for (let animal of animalsArr) { console.log(animal); } // prints each animal in turn
//const animalObj = { name: 'tiger', genus: 'panthera', class: 'mammal'}
//for (let property of animalObj) { console.log(property); } // TypeError: animalObj is not iterable

//array.from
console.log( Array.from("string") ) // [ 's', 't', 'r', 'i', 'n', 'g' ]
console.log( Array.from(new Set(['cat', 'bat', 'sat', 'cat', 'bat'])) ) // [ 'cat', 'bat', 'sat' ]
console.log( Array.from(new Map([[1, 'one'], [2, 'two'], [3, 'three']])) )
// [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
function makeArray() {
 return Array.from(arguments);
}
console.log( makeArray(1, 2, 3) ); // [ 1, 2, 3 ]















         
