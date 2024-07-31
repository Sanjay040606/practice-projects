var input1 = document.querySelector("#input1")
var addbtn1 = document.querySelector("#addbtn1")
var ul = document.querySelector("#ul1")
addbtn1.addEventListener("click" , (data) => {
    data.preventDefault()
    var newelement = `<li>${input1.value}<button onclick='deleteelement(this)'>delete</button></li>`
    ul.insertAdjacentHTML("beforeend",newelement)
    input1.value =""
    input1.focus()
})
function deleteelement(x){
    x.parentElement.remove()
}