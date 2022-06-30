var input=document.getElementById("input");
var button=document.getElementById("click");
var ul=document.querySelector("ul");
//var input=document.getElementsByClassName("submit")[0];

function inputlength () {
   return input.value.length;
}
function createListElement() {
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
    input.value = "";
}

button.addEventListener("click", function() {
    if (inputlength() > 0) {
       createListElement ();
    }
})

// button.addEventListener("keypress", function(event) {
//     if (inputlength() > 0 && event.keycode === 13) {
//        createListElement();
//     }
// })

//input.addEventListener("click", alert("Thanks for subscribing!!!"))



