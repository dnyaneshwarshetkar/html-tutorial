let x = 10;

let y = 20;

let z = x + y;

console.log(z);

let firstNumber,secondNumber,thirdNumber;
firstNumber = 2;
secondNumber = 3;
thirdNumber = firstNumber ** secondNumber;

console.log(thirdNumber);

firstNumber = 31;

secondNumber = 10;

thirdNumber = firstNumber % secondNumber;

console.log(thirdNumber);

let m, n, o;
m = 10;
n = m++;
console.log("After increment m",m);
console.log("After increment",n);
o = ++m;
console.log("After Preincrement value in o", o);

let p,q,r;
p = 12;

q = p--;

console.log("After post decrement", q);
console.log("After post decrement", p);

r = --p;

console.log("After pre decrement", p);
console.log("After pre decrement",r);

//  Assignment Operator

let a = 20;

a = a + 1;

a +=1; // a = a + 1;

console.log(a);

a = a-1;

a -=1;

console.log(a);


// Comparision Operator

 console.log(2==2);

 console.log(2==3);

 console.log(2 === 2);

 console.log(2 === "2");

 console.log(2 != 3); // true
 console.log(2 !=2); // false

 var c = 20, d = 40, e;

 e=c==d;
 e= c!=d;

console.log(e);

var first, second, third;

first = 3; second = "3";

third = first!=second; // false

console.log(third);

third = first!==second; // true

console.log(third);

first = 10; second = 5;

third = first>second;

console.log(third);

// Ternery Operator

let f,s,t;

f = 3;
s = 4;

t = f<s ? "This statement is true": "this Statement is False";

console.log(t);


// String Concatenation

let firstName, lastName, fullName;

firstName = "John";


lastName = "Doe";

fullName = firstName + " " + lastName;

console.log(fullName);

// Logical Operators

let result = 2<3 && 5>1;

console.log(result);

result = 2<3 && 5<1;

console.log(result);

let orOperatorResult = 4<=7 || 8>=9;

console.log(orOperatorResult);

// Not Operator

// Bitwise Operator Assignment

// Type Operators
let g = 4;

console.log(typeof g); //number

g = "Horse";
let type = typeof g; // string

console.log(type);
g = true;

console.log(typeof g);


let myVar;
console.log(myVar);

myVar = 3;

myVar = undefined;

myVar = null;

const yourVar = 7;
//yourVar = null;


// Object Creation

var f1 = {
    color: "grey",
    type: "tablefan",
    price: 1300,
    increaseSpeed: function(){
        console.log("My Speed Increased");
    },
    decreaseSpeed: function(){
        console.log("My Speed Decreased");
    },
    onOff: function(){

    }
}

//Access Object Properties

console.log(f1.color);

f1.increaseSpeed();


// Array
let studentArray = ["Prajakta", "Sushila", "Prashant","Yogesh","Manish"];

console.log(studentArray[0],studentArray[3]);

console.log(studentArray.length);

studentArray.push("Ravish");
console.log(studentArray[5]);

console.log(studentArray.pop());

console.log(studentArray.length);

let primNumbers = [3,5,7,11,13,17];

console.log(primNumbers[-1]);

console.log(primNumbers.length);





let arrayOfFans = [
    {
        color: "grey",
        type: "tablefan",
        price: 1300,
        increaseSpeed: function(){
            console.log("My Speed Increased");
        },
        decreaseSpeed: function(){
            console.log("My Speed Decreased");
        },
        onOff: function(){
    
        }
    },
    {
        color: "red",
        type: "ceiling",
        price: 2100,
        increaseSpeed: function(){
            console.log("My Speed Increased");
        },
        decreaseSpeed: function(){
            console.log("My Speed Decreased");
        },
        onOff: function(){
    
        }
    }
];

arrayOfFans[1].increaseSpeed();

let currentDate = new Date();

console.log(currentDate);

console.log(currentDate.getDate());


if(3>2){
    console.log("If block");
} else{
    console.log("ELse Block");
}

var num1 = 1;

if(num1<1){
    
}

if(num1>2){
    console.log("If Block");
} else if(num1>3){  
    console.log("Else if Block");
} else if(num1>2){
    console.log("2 Else If Block");
} else {
    console.log("Else Block");
}

let gender = "M";

switch(gender){
    case "M" :
        console.log("Gender is M");
        //break;
    case "F":
        console.log("Gender is F");
        break;
    default: 
        console.log("Gender is neither M nor F");

}


// Functions

function addition(num1, num2){
    return num1+num2;
}


let addResult;

addResult = addition(10,20);
 console.log(addResult);


for(
    var i = 1;
    i<=10;
    i++){
        console.log(i);
}

for(let singleStudent of studentArray){
    console.log(singleStudent);
}

console.log(myLuckyNumber);

var myLuckyNumber = 30;






