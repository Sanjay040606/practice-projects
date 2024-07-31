var input = document.querySelector("#inputname");
var span = document.querySelector("#span");
var button = document.getElementById("button");
button.addEventListener("click" ,
function genrate(){
    var inputValue = input.value;
    var splitedName = inputValue.split("");
    var randomNumber = Math.floor(Math.random()*splitedName.length);
    console.log(splitedName[randomNumber]);
    span.textContent = splitedName[randomNumber];
} );

