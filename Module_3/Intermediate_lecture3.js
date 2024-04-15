//MAP
const exampleMap = new Map() // create new empty map object
exampleMap.set(1, 'number one') // 'set' adds a new key-value pair to the map
exampleMap.set('1', 'string one') // maps support keys of different types
exampleMap.set(true, 'true') // can have boolean keys
exampleMap.set({name: 'John'}, {phone: '0412345678'}) // object keys also valid
exampleMap.set('1', 'second string one') // overwrites previous value if key exists
console.log(exampleMap.size) // 4 - number of items in the map
console.log(exampleMap)
// Map(4) { 1 => 'number one', '1' => 'second string one', true => 'true',
 //{ name: 'John' } => { phone: '0412345678' } } 

console.log( exampleMap.get('1') ) // second string one - gets value for matching key
console.log( exampleMap.get(2) ) // undefined - key doesn't exist so no value
console.log( exampleMap.has(1) ) // true - key does exist
console.log( exampleMap.delete(true) ) // true - removes item and returns true if successful
exampleMap.clear() // removes all items from map
console.log( exampleMap ) // Map(0) {}

//Map Iteration
const recipeMap = new Map([
    ['flour', '1 cup'],
    ['milk', '1/2 cup'],
    ['eggs', 2],
    ['butter', '50g']
   ])
   for (let ingredient of recipeMap.keys()) {
    console.log(ingredient ) // flour, milk, eggs, butter
   }
   for (let quantity of recipeMap.values()) {
    console.log(quantity) // 1 cup, 1/2 cup, 2, 50g
   }
   for (let item of recipeMap) { // same as recipeMap.entries()
    console.log(item)
    } // ['flour', '1 cup'], (and so on)

//conversion with object
//Converting map to an object
const priceMap = new Map([
    ['banana', 1],
    ['pineapple', 2],
    ['watermelon', 5]
   ])
   const priceObject = Object.fromEntries(priceMap)
   console.log(priceObject) // { banana: 1, pineapple: 2, watermelon: 5 }

//converting object to map
const BriceObject = { banana: 1, pineapple: 2, watermelon: 5 }
const BriceMap = new Map( Object.entries(BriceObject) )
console.log(BriceMap) // Map(3) { 'banana' => 1, 'pineapple' => 2, 'watermelon' => 5 }
console.log(BriceMap.get('banana')) // 1 

//SET
const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])
names.add('Mateo')
names.add('Oliver')
names.add('Bruno')
console.log(names.size) // 5 - only the unique names
console.log(names) // Set(5) { 'Pedro', 'Oliver', 'Jack', 'Mateo', 'Bruno' }

const naames = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])
console.log( naames.delete('Jack') ) // true - successful delete
console.log( naames.has('Jack') ) // false - Jack no longer exists in set
console.log( naames.has('Mateo') ) // true - Mateo does exist in set
naames.clear()
console.log(naames) // Set(0) {}

//Iteration
const namess = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])
// traditional style of for loop - works because Sets are iterable
for (let name of namess) {
 console.log(name)
}
// more concise for simple operations, newer syntax using arrow function
names.forEach(name => console.log(name))

//Weakmap
const weakMap = new WeakMap()
const princess = { name: 'Belle' }
weakMap.set(princess, 'Beauty and the Beast')
//princess = null // no longer a reference to princess1 in memory, so weakMap is now empty
// BUT there’s no way to check because we can’t do .size, .values() or .keys() on a WeakMap
//weakMap.set('Cinderella', 'Cinderella') // TypeError: Invalid value used as weak map key

//
const cachedWealth = new WeakMap()
// below data would come from external source
const billionaires = [ { name: 'Elon Musk' }, { name: 'Jeff Bezos' }, { name: 'Bill Gates'} ]
function calculateWealth(billionaire) {
 let wealth = cachedWealth.get(billionaire) // if it exists already, get the cached value
 if (!wealth) { // otherwise, calculate it (eg. lookups of external data or expensive calculations)
 wealth = Math.floor(Math.random() * 300); // example only, actual may be lookup(billionaire)
 cachedWealth.set(billionaire, wealth); // store calculation in Map
 }
 return wealth;
}
billionaires.forEach(billionaire => calculateWealth(billionaire)) // populate cache
let elon = billionaires[0]
console.log(cachedWealth.has(elon)) // true
// if external object is removed, our cache will also update and remove unreferenced value
elon = null;

//Destructuring Assignment
//Array destructuring
const mj = ['Michael', 'Jordan']
const [mjFirst, mjLast] = mj //destructure (unpack) array on right into separate variables on left
console.log(mjFirst, mjLast) // Michael Jordan

//Example of what we doing
let student = ["Rahul", "Melbourne", "Software engineer"]
let personname, State, Occupation;

personname = student[0]
personname = student[1]
personname = student[2]
 console.log(student)
 console.log(student[1])

 //Easier way of ARRAy destructuing
 let labs = ["labtest", "labplus", "awanui"]
 let [lab1, lab2, lab3] = labs
console.log(labs)
console.log(lab1, lab3)

//it ignores leements using comma
const [jcFirst, jcLast, , , jcPlace] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
console.log(`${jcFirst} ${jcLast} is a ${jcPlace}`) // Julius Caesar is a Roman

//it works with any iterable on the right side
const [a, b, c] = "abc" //strings are iterable, so can break into characters
console.log(a, b, c)
const [ one, two, three ] = new Set([1, 2, 3]) //Sets are iterable, so can be destructured
console.log(one, two)
const [ [type, quantity] ] = new Map([ ['apple', 4] ]) // Maps are iterable too
//now we have 6 individual variables: a, b, c, one, two, three, type, quantity
console.log(a, b, c, one, two, three, type, quantity) // a b c 1 2 3 apple 4

//It assigns to anything on the left side
const monarch = {}; // empty object
[ monarch.title, monarch.name ] = "King Charles".split(' '); //store array pieces in object properties
console.log(monarch); // { title: 'King', name: 'Charles' }

const teeProduct = { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }
//key and value are just variable names, could be anything
for (let [key, value] of Object.entries(teeProduct)) {
 console.log(`${key}: ${value}`) // id: 1, title: Sleeveless Tee, price: 23.95 ...
}

//swap variable trick
let studennt = 'James', teacherrr = 'Andrew';
[studennt, teacherrr] = [teacherrr, student]
console.log(studennt) // Andrew
console.log(teacherrr) // James

//The Array Rest
const [jjcFirst, jjcLast, ...jcTitles] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
console.log( jcTitles ) // [ 'Consul', 'of the', 'Roman', 'Republic' ]
console.log(jjcFirst)
console.log( jcTitles.length ) // 4

//default values
const [jccFirst = 'Unknown', jccLast, jccTitle = 'Consul'] = ['Julius', 'Caesar']
console.log( jccFirst ) // Julius  //since theres more values on the right side then left, the 'unknown' values gets overridden.

console.log(jccLast)
console.log( jccTitle ) // Consul

//Object Destructiring
// property names (keys) on right are matched to variable names on left
let { width, height, title} = { title: 'My Component', height: 100, width: 200 }
console.log(width, height, title) // 200 100 My Component

//Assigning missing property
let { wiidth = 200, heeight = 100, tiitle} = { tiitle: 'My Component' }
console.log(wiidth, heeight, tiitle) // 200 100 My Component

//Date and time
//creation
const now = new Date
console.log( now ) // 2023-03-26T11:45:59.096Z
console.log( +now ) // 1679832116638 - number of milliseconds since epoch

const epoch = new Date(0) // 0 milliseconds since Jan 1 1970
const jan2_1970 = new Date(1000 * 60 * 60 * 24) // a full day in milliseconds after Jan 1
console.log(epoch) // 1970-01-01T00:00:00.000Z
console.log(jan2_1970) // 1970-01-02T00:00:00.000Z

const christmas = new Date('2023-12-25') // assumes UTC timezone if time not included
console.log(christmas) // 2023-12-25T00:00:00.000Z - Z indicates UTC timezone, GMT+0
const nyeLocal = new Date('2023-12-31 23:59:59') // assumes local timezone if time is included
const nyeUTC = new Date('2023-12-31 23:59:59+00:00') // specific timezone specified (UTC)... put 00:00 to put it as local time. 
console.log(nyeLocal) // 2023-12-31T13:59:59.000Z - stored internally as UTC so now hours are different. printed as 10.59am. like 13 hours difference.
console.log(nyeUTC) // 2023-12-31T23:59:59.000Z - UTC before midnight, no longer local timezone

const boxingDay = new Date(2023, 11, 26) // assumes local timezone
console.log(boxingDay) // 2023-12-25T14:00:00.000Z - so hours are different in UTC
const remembranceDay = new Date( 2023, 10, 11, 11, 11 ) // assumes local timezone
console.log(remembranceDay) // 2023-11-11T01:11:00.000Z - so hours are different in UTC

const cchristmas = new Date('2023-12-25') // assumes UTC timezone if time not included
console.log( cchristmas.toLocaleDateString() ) // 25/12/2023 - dd/mm/yyyy if in Australia/NZ
console.log( cchristmas.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }) )
// 2023. 12. 25. 오전 9:00:00 - both timezone and language are converted to Korean
const nnyeLocal = new Date('2023-12-31 23:59:59') // assumes local timezone if time is included
console.log( nnyeLocal.toLocaleString() ) // 31/12/2023, 11:59:59 pm - default to local TZ










   
   

