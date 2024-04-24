function onButtonClickExternal(){
    alert("You clicked me");
}

function onMouseOverExternal(){
    alert("You mouse pointer is over me");
}

document.getElementById("firstPara").innerText = "I am changing You";
document.getElementById("firstPara").title = "this is Javascript title";
document.getElementById("firstPara").style.color = "red";

function showPassword(){
    if(document.getElementById("passwordField").type === "password"){
        document.getElementById("passwordField").type = "text";
    } else {
        document.getElementById("passwordField").type = "password";
    }
}

function hide(){
    document.getElementById("myDiv").style.display = "none";
}
function show(){
    document.getElementById("myDiv").style.display = "block";
}