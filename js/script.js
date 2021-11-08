function init() {
  barLink = get
  var barElem = document.getElementById("barLink");
  barElem.addEventListener("click", navFunction);
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
