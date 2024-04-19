
//Question 1

"" + 1 + 0     //10
"" - 1 + 0     //-1
true + false   //true
!true          //false (because not true)
6 / "3"        //2 (string converted to number)
"2" * "3"      //6 (string converted to number during *)
4 + 5 + "px"   //9px 
"$" + 4 + 5    //$45
"4" - 2        //2
"4px" - 2      //NaN (px is not a number)
" -9 " + 5     //-9 5 (addition of string and number will concatenate)
" -9 " - 5     //-14 (not using + addition sign)
null + 1       //1 (null + 1 is 1)
undefined + 1  // NaN (undefined is not a number)
undefined == null  //true
undefined === null  //false (does not match)
" \t \n" - 2   //-2



// Question 2
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four //34 (3 and 4 strings concatenate)
let multiplication = three * four //12 (multiplication)
let division = three / four //0.75 (division)
let subtraction = three - four //-1 (subtraction)
let lessThan1 = three < four //true
let lessThan2 = thirty < four //true //its not number comparision, its letters.

console.log(addition)
console.log(multiplication)
console.log(division)
console.log(subtraction)
console.log(lessThan1)
console.log(lessThan2)

//Question 3
if (0) console.log('#1 zero is true') //not print - 0 is false
if ("0") console.log('#2 zero is true') //print - string 
if (null) console.log('null is true')   //not print - null is false
if (-1) console.log('negative is true') //print - negative number
if (1) console.log('positive is true')   //print - positive number 

//Question 4 //HELP
/*let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
} */

//Question 4
let a = 2, b = 9;

let result = `${a} + ${b} is ` + (a + b <10? "Less than 10" : "Greater than 10")
console.log(result) //The += oeprater concatenates the result


//Question 5

function getGreeting(name) {
    return 'Hello ' + name + '!';
    }
console.log(getGreeting("Rahul"))

//Arrow function
const getGreetingarrow = (myname) => {
return `Hello ${myname} !` ;
};
console.log(getGreetingarrow("Rahul Pala"))
    
//Expression function
const getExpression = function(yourname) {
return `Hi ${yourname} !`
};
console.log(getExpression("Raooul"))
    
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
    //Part B
    // getCatchPhrase(person) {
    //     if (person.numFingers === 6) {
    //         return "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.";
    //     } else {
    //         return 'Nice to meet you.';
    //     }
    // } 
    // Part C
    getCatchPhrase : (person) => {
       return person.numFingers === 6 ? "Hello. My name is Inigo Montoya. You killed my father. Prepare to die" : 'Nice to meet you.'
    }
    }

    inigo.greeting(westley)
    inigo.greeting(rugen) 


  //Question 7
    const basketballGame = {
        score: 0,
        fouls: 0,
        foul() {
            this.fouls++;
            return this
        },
        freeThrow() {
        this.score++;
        return this
        },
        basket() {
        this.score += 2;
        return this
        },
        threePointer() {
        this.score += 3;
        return this
        },
        halfTime() {
        console.log('Halftime score is '+this.score);
        return this
        },
        fullTime() {
        console.log('Fulltime score is '+this.score)
        return this
        },
    }

    basketballGame.basket().freeThrow().basket().threePointer().halfTime().foul().fullTime()

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
        //basketballGame.basket().freeThrow().basket().threePointer().halfTime(); */

//Question 8
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }
    function getCityInfo(city) {
        for (let key in city) {
            console.log('Property: ' + key) 
            console.log('Value: ' + city[key])
        }
        }
   function testConsoleLog(city) {
    return city
   }

const Melbourne = {
    name: "Melbourne",
    state: "Victoria",
    speciality: "Coffee",
    Sports: "Cricket",
}
getCityInfo(sydney)
getCityInfo(Melbourne)
console.log(testConsoleLog(sydney))
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






    












    
   



