function addition(x, y) //this function returns the sum of two numbers
{
   return x + y
}
if(addition(2,4)!=6) {throw new Error("did not equal to 6")} ;
if(addition (4,4)!=8) {throw new Error("did not equal to 8")};
if(addition(0,10)!=10) {throw new Error("did not equal to 10")};


function subtraction(x, y) //this function returns x minus y value
{
   return x - y
}
if(subtraction(10,0)!=10) {throw new Error("did not equal to 10")};
if(subtraction(20,10)!=10) {throw new Error("did not equal to 10")};
if(subtraction(10,20)!=-10) {throw new Error("did not equal to 10")};
  

function multiplication(x, y) //this function returns multiplication of two numbers
{
   return x * y
}

if(multiplication(10,0)!=0) {throw new Error("did not equal to 0")};
if(multiplication(10,10)!=100) {throw new Error("did not equal to 100")};
if(multiplication(1,1)!=1) {throw new Error("did not equal to 1")}

function division(x, y) //this function returns division of two numbers
{
   return x / y
}
if(division(2,2)!=1) {throw new Error("did not equal to 1")};
if(division(-1,1)!=-1) {throw new Error("did not equal to -1")};
if(division(3,1)!=3) {throw new Error("did not equal to 3")};

let result= addition(10, 10);
console.log(result);

result=subtraction(80, 50)
  console.log(result)

result=multiplication(5,8)
console.log(result)

result=division(100, 2)
console.log(result)

function myname(name) //this function returns a string value
{
   console.log("Hello "+ name)
}

myname("Rahul")



