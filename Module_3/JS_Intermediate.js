// Question 1    //HELP
function ucFirstLetters(str) {
    let words = str.split('');


}


//console.log(ucFirstLetters("los angeles"))

//Question 2
function truncate(str, max) {
    // Check if the length of the string is greater than the maximum allowed length
    if (str.length > max) {
        // Truncate the string to the specified maximum length and add an ellipsis (...)
        return str.substring(0, max) + '...';
    } else {
        // Return the original string if its length is within the allowed maximum
        return str;
    }
}

// Test the function with different strings and maximum lengths
console.log(truncate("Hello world", 5)); // Output: "Hello..."
console.log(truncate("Lorem ipsum dolor sit amet", 10)); // Output: "Lorem ipsu..."
console.log(truncate("JavaScript", 15)); // Output: "JavaScript"
    


//Question 3
const animals = ['Tiger', 'Giraffe']
console.log(animals)

console.log(animals[0])
console.log(animals[1])

animals.push("Dog", "Cat")    //Part A
console.log(animals)

animals.unshift("Lion", "Monkey")    //Part B
console.log(animals)

const sortedanimals = [...animals].sort() //Part C
console.log(sortedanimals)
//console.log(sortedanimals.sort((animal1, animal2)) => animal1 - animal2) (//How to write code this way???)
//console.log(sortedanimals)



function replaceMiddleAnimal(newValue) {                 //Part D
    // Calculate the middle index of the animals array
    const animalmiddleIndex = Math.floor(animals.length / 2);

    // Replace the value at the middle index with newValue
    animals[animalmiddleIndex] = newValue; //same as animals[1] = something
}

// Test the function
console.log("Original array:", animals);
replaceMiddleAnimal('Dinosaur');
console.log("Updated array:", animals);

function findMatchingAnimals(beginsWith) {         //Part E
   const searchprefix = beginsWith.toLowerCase()

   const matchinganimals = animals.filter(animal => {
   const animalslowercase = animal.toLowerCase();
   return animalslowercase.startsWith(searchprefix);
})
return matchinganimals
}

console.log(findMatchingAnimals("D"))

 function camelCase(cssProp) {

 }                    
 
 //Question 4   HELP

//console.log(camelCase('margin-left')) // marginLeft
//console.log(camelCase('background-image')) // backgroundImage
//console.log(camelCase('display')) // display

// Question 5 
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`) 
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

//A
/*Floating point numbers can't be accurately represented in binary, and some operations lead to unexpected results. 
When you use toFixed(2) on twentyCents (0.20) and tenCents (0.10), they are converted into strings with 
two decimal places ("0.20" and "0.10" respectively). When you use the + operator on two strings (fixedTwenty and fixedTen),
 JavaScript treats this as string concatenation, not numeric addition. Therefore, "0.20" + "0.10" results in "0.200.10" 
 (which is a concatenation of the two strings) instead of performing numeric addition. */

//B
function currencyAddition(float1, float2) {

    let sumofcurrencyAddition = float1 + float2
    return sumofcurrencyAddition.toFixed(2)

}
console.log(currencyAddition(0.60, 0.30))

//C 
function currencyOperation(float1, float2, operation) {   //HELP

    let floatresult;
    switch (operation) {
        case "+":
            floatresult = float1 + float2
            break;
        case "-":
            floatresult = float1 - float2
            break;
        case "*":
            floatresult = float1 * float2
            break;
        case "/":
            floatresult = float1 / float2
            break;
            default:
                console.log("Error found")

        return floatresult
    }
}

 console.log(currencyOperation(0.20, 0.2, "-")); 

 //Question 6
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

function unique(duplicatesArray) {
return [...new Set(duplicatesArray)]
}

console.log(unique(colours))
console.log(unique(testScores))

//Question 7
 const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

//A
function getBookTitle(bookId) {
    let findbook = books.find(book => book.id===bookId);
    return findbook.title
}
console.log(getBookTitle(1)) 


//B
function getoldBooks() {
    const oldBooks = books.filter(book => book.year < 1950)
    return oldBooks;
}
const oldBooks = getoldBooks();   //Help. Why we doing this?

console.log(oldBooks)


//C   Help
function addGenre() {
    const bookswithgenre = books.map(book)
}
    
//Question 8
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343') 
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

//A
const phoneBookDEF = new Map()

//B
phoneBookDEF.set("Dani", "021111111")
phoneBookDEF.set("Emma", "0222222222")
phoneBookDEF.set("Fenny", "0233333333")

console.log(phoneBookDEF)

//C
phoneBookABC.set("Caroline", "0244444444")
console.log(phoneBookABC)

//D
function printPhoneBook(contacts) {
    for(const [Name, Phonenumber] of contacts)
    console.log(`${Name} : ${Phonenumber}`)
}
printPhoneBook(phoneBookABC)

//E
printphonebook = [...phoneBookABC, ...phoneBookABC]  //HELP
console.log(printPhoneBook)

//F
for(let names of phoneBookABC.keys()) {
    console.log(names)
}

//Question 9
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };
    
//A

// Function to calculate the total sum of salaries
function sumSalaries(salaries) {
    // Get an array of all salary values using Object.values()
    let salaryValues = Object.values(salaries);
    
    // Calculate the total sum using Array.reduce()
    let total = salaryValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    return total; // Return the total sum of all salaries
}

// Call the sumSalaries function with the salaries object as argument
let totalSalaries = sumSalaries(salaries);

console.log("Total of all salaries:", totalSalaries); // Output the total sum of salaries

//B
function topEarner(salaries) {

}

//Question 10
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

//A
console.log(today.getMinutes())  //Help

//B
console.log(today.getMilliseconds()) //Help

//C



    
   
 