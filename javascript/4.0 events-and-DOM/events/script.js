function changeParagraphColor(e){
 e.target.style.color = "blue";
 console.log(this);
}

function onMouseOver(e){
    console.log(e.target);
    e.target.style.backgroundColor = "yellow";
    e.target.style.color = "white";
}
function onMouseOut(e){
    console.log(e.target);
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
}

function onKeyDown(e){
    e.target.style.backgroundColor = "yellow";
}

function onKeyUp(e){
    e.target.style.backgroundColor = "white";
}

function onChange(e){
    console.log(e.target.value);
    document.getElementById("result").innerHTML = e.target.value;
}

function onBodyLoad(e){
    console.log(e);
    document.getElementById("bodyTag").style.backgroundColor = "black";
}

