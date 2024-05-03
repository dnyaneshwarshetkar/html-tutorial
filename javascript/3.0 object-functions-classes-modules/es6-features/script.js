// Arrow Functions
// Named Functions
// Anonymous Functions

function add(num1,num2){
    return num1+num2;
}

var addResult = add(10,12);

console.log(addResult); //22

var subFunc =  function(num1,num2){
    return num1 - num2;
}

var subResult = subFunc(12,30); 

console.log(subResult);// -18

var mulFun = (num1,num2)=>{
    return num1 * num2;
}

var mulResult = mulFun(30,12);

console.log(mulResult); // 360


// Spread Operator

var s1 = ["Madhav", "Madhavi", "Yogesh"];

var s2 = ["Ganesh","Mahesh","Rajesh"];

var s3 = [...s1,...s2];

console.log(s3);

var ob1 = {
    firstName: "John",
    lastName: "Doe"
}

var ob2 = {
    age: 23
}

var ob3 = {
    ...ob1,
    ...ob2
}

console.log(ob3);

var s = Symbol("1_ODD_NUMBER");
var ob4 = {};
ob4.firstName = "John";
ob4.lastName = "Doe";

ob4["age"] = 10;
ob4[s] = 1;

console.log(ob4);

var ob5 = {};

ob5[s] = 1;
var ob6 = {};

ob6[s] = 1;

console.log(ob4,ob5,ob6);


// Rest Properties

var hobbies = ["Painting","Drawing","Singing", "Playing"];

var [first,second, ...restHobbies] = hobbies; 

console.log(first, second, restHobbies);


function addition(first, second, ...numbers){
    return numbers.reduce((previousValue, currentValue)=>{
        return previousValue + currentValue;
    },0) + first + second;
}

let additionResult = addition(1,2,3,4,5,6);

console.log(additionResult);


//Javascript Async

// Callback

function mul(num1,num2, callback){
  let num3 = num1 + num2;
  //callback(num3);
}

function showResultInnerHTML(){

}

function showResult(mulResult){
    console.log(mulResult);
}

mul(10,20, showResultInnerHTML);

function getAddress(lat,long, callback){
    // called address api got result and called callback function
    callback("Rahatani Phata");
}


getAddress(10.123,16.123, function(address){
    console.log(address);
})


// Promise

let p = new Promise(function(resolve,reject){
    // you did something
    let num1 = 12,num2 = 15;
    let sum  = num1 + num2;
    //let sum;
    if(sum){
         //success
        resolve(sum);
    } else {
         // error 
        reject("Sum did not happen"); 
    }
   
   
});

p.then(function(result){
    console.log(result);
})

console.log("Hello World !!!");

/*async function getResult(){
    let result = await p;

    console.log(result);
}

getResult();*/



