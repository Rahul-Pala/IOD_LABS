//Question 1

"" + 1 + 0     //10
"" - 1 + 0     //-1
true + false   //true
!true          //false
6 / "3"        //2
"2" * "3"      //6
4 + 5 + "px"   //9px
"$" + 4 + 5    //$45
"4" - 2        //2
"4px" - 2      //NaN
" -9 " + 5     //-9 5
" -9 " - 5     //-14
null + 1       //1
undefined + 1  // NaN
undefined == null  //true
undefined === null  //false
" \t \n" - 2   //-2


// Question 2
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four //34
let multiplication = three * four //12
let division = three / four //0.75
let subtraction = three - four //-1
let lessThan1 = three < four //true
let lessThan2 = thirty < four //false //HELP

console.log(addition)
console.log(multiplication)
console.log(division)
console.log(subtraction)
console.log(lessThan1)
console.log(lessThan2)

//Question 3
if (0) console.log('#1 zero is true') //not print - 0
if ("0") console.log('#2 zero is true') //print - string 
if (null) console.log('null is true')   //not print - null
if (-1) console.log('negative is true') //print - negative number
if (1) console.log('positive is true')   //print - positive number 

//Question 4 //HELP
let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}

let c=3, d=4;  //Question 4 answer
let Answer1= c * d
let Answer2= c + d
console.log(Answer1 < 10 ? 'Result less than 10': 'Result greater than 10');
console.log(Answer2 < 10 ? 'Result less than 10': 'Result greater than 10');



//Question 5

/*function getGreeting(name) {
    return 'Hello ' + name + '!';
    }
console.log(getGreeting("Rahul")) */

const GetGreeting = function(name)  //A. expression syntax
    {
        return 'Hello '  + name + '!';
    } 

    console.log(GetGreeting("Rahul Pala")) 

const getGreeting = (name) =>  //B Arrow function
{
    return 'Hello '  + name + '!';
}
console.log(getGreeting("Raoool"))
    
//Question 6 HELP with B and C
const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) { 
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
    return 'Nice to meet you.';
    }
    }
    inigo.greeting(westley)
    inigo.greeting(rugen)

    //Question 7
    const basketballGame = {
        score: 0,
        freeThrow() {
        this.score++;
        },
        basket() {
        this.score += 2;
        },
        threePointer() {
        this.score += 3;
        },
        halfTime() {
        console.log('Halftime score is '+this.score);
        },
        fullTime() {
        console.log('Fulltime score is '+this.score)
        },
    }

    //basketballGame.basket().freeThrow().basket().threePointer().halfTime();

    const basketballgameFouls = {
        fouls: 0,
        numberoffouls() {
            this.fouls++;
        },
        halfTimefouls() {
        console.log('Halftime total fouls is '+this.fouls)
        },

        FullTimefouls() {
            console.log('Fulltime total fouls is '+this.fouls)
            },
    }

    
        //modify each of the above object methods to enable function chaining as below:
        //basketballGame.basket().freeThrow().basket().threePointer().halfTime();

//Question 8
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }
for (let key in sydney) {
    console.log('Property: ' + key) 
    console.log('Value: ' + sydney[key])
}    

const Melbourne = {
    name: "Melbourne",
    state: "Victoria",
    speciality: "Coffee",
    Sports: "Cricket",
}

for(let key in Melbourne) {
    console.log("property: " + key)
    console.log("Value: " + Melbourne[key])
}

//Question 9
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = teamSports  //A

moreSports.push("Rugby");   //A
moreSports.unshift("Soccer") //A

let dog2 = dog1;               //B
dog1 = "Tiger"
  
let cat2 = cat1;           //C
cat1.name = "catcat"

console.log(teamSports)    //D 
console.log(dog1)
console.log(cat1) 
console.log(moreSports)    //D 
console.log(dog2)
console.log(cat2)   

//let cat2 = {...cat1, name:"kitty"}    //E

//Question 10

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    }
    












    
   



