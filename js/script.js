function init() {
  var barElem = document.getElementById("barLink"); // Get the a element for the navigatin
  barElem.addEventListener("click", navFunction); // Craete an AddEventLister for it and call the navfunction
}


function navFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

window.addEventListener("load",init);
