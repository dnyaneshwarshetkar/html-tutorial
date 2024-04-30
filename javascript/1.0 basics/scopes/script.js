var a = 10;
var b = 20;
var c = 30;

function callMe(){
    var d = 50;

    console.log(a,b,c,d);
    {
     var p =20; 
     let r = 10;
    }
    console.log(p);
    console.log(r);


}
console.log(d);
callMe();

