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

