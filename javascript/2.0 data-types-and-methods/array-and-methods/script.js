let studentArray = ["Shila","Manisha", "Maya", "Shukesh"];

let allStudents = studentArray.toString();

allStudents = studentArray.join("|");

document.getElementById("studentPara").innerHTML = allStudents;

studentArray[1] = "Radhika";
var olList =  "<ul>";
console.log(olList);
for(let i = 0;i<studentArray.length;i++){
    olList = olList + `<li>${studentArray[i]}</li>`;
    console.log(olList);
}
olList = olList + "</ul>";
console.log(olList);

console.log(olList);

document.getElementById("studentList").innerHTML = olList;

console.log(studentArray[0]);
console.log(studentArray[studentArray.length-1]);

studentArray.at(0);

delete(studentArray[3]);

console.log(studentArray);


console.log(studentArray.includes("Maya"));

let friends = ["Aakash","Devidas", "Babita","Chandrakala"];

let sortedFriends = friends.sort();

console.log(sortedFriends);

let reverseList = sortedFriends.reverse();

console.log(reverseList);


let numberList = [0,1000, 500, 600, 2000];

let sortedList = numberList.sort((a,b)=>{
    return a-b;
});

console.log(sortedList);

numberList.forEach(function(value){
    console.log(value*value);
})

let tranformedArray = numberList.map(function(value){
    return value/2;
})

console.log(tranformedArray);

let isAnyNumberGreaterThan400 = numberList.some(value=>{
    return value>400;
});


let myHobbies = [];
myHobbies[0] = "Mahesh";
myHobbies = [];
