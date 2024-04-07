let employee = {};
employee.joiningdate = "25/12/1989";
console.log(employee)

let lecturer = new Object();
console.log(lecturer)
 lecturer.Name = "Rahul"
 console.log(lecturer.Name)

 lecturer.Name = "Pala"
 console.log(lecturer.Name)

 

const object = {
    2: 'value of new property',
   }
   console.log(object) // { '2': 'value of string property' } since 2 and ‘2’ are same

   //property existance test
   const phone ={
    model: "iphone 14",
    color: "black",
   }

   if (phone.color) 
   
   console.log(`my phone is ${phone.model} and it is color ${phone.color}`)

   if (phone.colour) console.log(`My ${phone.model} is ${phone.colour}`) // prints message
if (phone.storage) { // undefined counts as false, so the below won't print
 console.log(`My ${phone.model} has ${phone.storage}GB`);
}

//Iteration

let R = 20

for(let i = 5; i <= R; i++)
{
    console.log(i)
}

let student = {
    name: "Rahul",
    Occupation: "software engineer",
    income: "$130 thosand",
}

console.log(student)

for(let property in student)
{
      console.log(property  + student[property])
}

//Object References
let person1 = { name: 'Anna' }; // object - stored by reference
let person2 = person1; // person2 points to same memory location as person1
person1.name = 'Brian';
console.log(person2.name); // Brian, even though we changed person1.name
let person3 = 'Carly'; // string - stored by value
let person4 = person3; // person4 points to different memory location than person3
person3 = 'David';
console.log(person4); // still Carly, since person3 and person4 are string primitive

//shallow copy
const user = {
    name: "Rahul",
    age: 30,
    country: "Australia",
}

const userclone = {}
userclone.firstname="Will"
userclone["lastname"] = "smith"

for(let key in user) {
userclone[key] = user[key];
}

console.log(userclone)

const water = {
    brand: "water h2o",
    litres: 1,
}

//spread syntex
const waterclone = {...water}
console.log(waterclone)

//add in new properties

const waterclone2 = {...water, age: 20, location: "New Zealand"}
console.log(waterclone2)

//merge multiple objects
const mergeduserandwater = {...user, ...water}
console.log(mergeduserandwater)

// deep clone
const box1 = {
    weight: '20kg',
    dimensions: { // nested object property
    width: '30cm',
    height: '10cm'
    }
   }
   const box2 = {...box1}; // shallow clone
   box1.dimensions.height = '12cm'; // change box1 nested object property
   console.log(box2); // box2 references box1 dimensions and picks up height chang

   //methods
   const uuser = {
    name: 'Bilbo Baggins',
    sing: function() { // method of user object
    console.log('Roads go ever ever on');
    },
    sing2() { // shorthand syntax, does same as above
    console.log('Over rock and under tree')
    }
   }
   uuser.sing(); // Roads go ever ever on
   uuser.sing2(); // Over rock and under tree

   //methods with context
   let country = {
    land: "NZ",
    size: "2220000km",
    trees: "coconut",
    animals: function()
         {
            console.log("kiwi")
            return "hii"
        },

    printlandandsize: function()
             {
                console.log(this.land +"   "+ this.size)
             },

   }

   console.log(country.animals())
   console.log(country.printlandandsize())

   const Phone = {
    model: 'iPhone 11',
    colour: 'black',
    storage: 64
   }
   for (let key in Phone) { // iterates over each property in the phone object
    console.log('key: ' + key); // prints each object property name (key) in turn
    console.log('value: ' + Phone[key]); // prints each object value in turn
   }

   function User(first, last) { // constructor function
    this.first = first;
    this.last = last;
    this.hasShortName = () => this.first.length <= 3;
   }
   // we can create multiple users with different names
   let user1 = new User('Tim', 'Smith') // need to use 'new'
   console.log(user1) // User { first: 'Tim', last: 'Smith' }
   console.log(user1.hasShortName()) // true

   function User(first, last) { // constructor function
    //this = {}; // implicitly
    this.first = first;
    this.last = last;
    this.hasShortName = () => this.first.length <= 3;
    //return this; // implicitly
   }
   
   
   



