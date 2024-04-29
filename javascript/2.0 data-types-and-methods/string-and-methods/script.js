var text = 
"My favorite book is \"Bhagavat Geet\"";

document.getElementById("firstPara").innerHTML = text;

var firstName = "John";
var lastName = "Doe";

var str = `My name is ${firstName} ${lastName}. Addition of two numbers ${2+3}`;

document.getElementById("secondPara").innerHTML = str;

let p = "GEETA";
let lenghtOfP = p.length;

`My name is
JOhn Doe`

let s1 = new String("My Name is John Doe");
let s2 = "My Name is John Doe";

let firstChar = s2.charAt(5);

let CapitalMCharCode = s2.charCodeAt(0);

console.log(firstChar);

console.log(CapitalMCharCode);

console.log(s2[8]);

console.log(s2.at(8));

// Slice

let s3 = s2.slice(11,15);

console.log(s3);

// substring

let s4 = s2.substring(11,15);

console.log(s4);

let s5 = s2.substr(11,4);
// trimg
let s6 =  "   Hello World   ";
console.log(s6);
let s7  = s6.trim();
console.log(s7);

console.log(s7.length);

// PadStart

let s8 = "10";

let s9 = s8.padStart(5,"$");

console.log(s9);

// Replace

let s10 = "English is universal language. I can talk in english.";

let s11 = s10.replace("English", "Marathi");

console.log(s11);

s12 = s10.replaceAll(/english/gi, "Marathi");

console.log(s12);

let hobbies = "Painting*Playing*Dancing";

let hobbiesArray = hobbies.split("*");
console.log(hobbiesArray);
console.log(hobbiesArray.length);

let isPlayingExist = hobbies.includes("Treking");

console.log(isPlayingExist);