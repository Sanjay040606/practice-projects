var user = document.getElementById("in")
var p1 = document.getElementById("randompara1")
var p2 = document.getElementById("randompara2")
var s = document.getElementById("span")
var s_no = Number(s.textContent)
// random numder
var random = Math.random()
var random_no = Math.floor(random*10+1)
//function
function random_check(){
    var input_1 = user.value
    
    for (count=1;count<=10;count+=10){
        if (random_no == input_1) {
            p1.textContent = "Your are correct"
            console.log("right")
            alert("You won the game")
        }
        else{
            s_no -= 1
            p1.textContent = "your wrong"
            s.textContent = s_no
            console.log("wrong")
        }
        }
        if (s_no==0){
            alert("You lose the game")
        }
    }