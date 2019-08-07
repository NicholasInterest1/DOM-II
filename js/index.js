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

  document.querySelectorAll("h2").addEventListener("dblclick", myFunction3);
function myFunction3() {
  document.querySelectorAll("h2").style.backgroundColor = "yellow";
}

// let hamburger = document.querySelector('img');

// hamburger.addEventListener('dblclick', function (e) {
//     hamburger.classList.toggle('large');
// });