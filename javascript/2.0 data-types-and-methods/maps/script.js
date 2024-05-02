const friends = new Map([
    ["firstName", "John"],
    ["lastName", "Doe"],
    ["age", 60],
    ["knowLanguages", ["English","Hindi"]]
]);

// get

console.log(friends.get("knowLanguages"));


// set

friends.set("hasCloseFriend", false);


friends.set("getFullName", function(){
    return "John Doe";
})

friends.delete("age");

console.log(friends.get("age"));

console.log(friends.has("knowLanguages"));

//size
console.log(friends.size); // 