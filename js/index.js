// Your code goes here

//------------------------------MouseOver---------------------------------------------------------------

let test = document.querySelectorAll("nav")[0];

test.addEventListener(
  "mouseover",
  function(event) {
    event.target.style.color = "#FEBD4F";
    setTimeout(function() {
      event.target.style.color = "";
    }, 1000);
  },
  false
);

//------------------------------KeyDown-----------------------------------------------------------------

document.querySelector("body").addEventListener("keydown", myFunction);
function myFunction() {
  document.querySelector("body").style.backgroundColor = "#FEBD4F";
}

//------------------------------Wheel-------------------------------------------------------------------

document.querySelector("h1").addEventListener("wheel", myFunctionAgain);

function myFunctionAgain() {
  this.style.fontSize = "50px";
}

//------------------------------DblClick--------------------------------------------------------------------

