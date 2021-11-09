function init() {
  var barElem = document.getElementById("barLink"); // Get the a element for the navigatin
  barElem.addEventListener("click", navFunction); // Craete an AddEventLister for it and call the navfunction
}


function navFunction() {
  var navEl = document.getElementById("globalNavEl");
  if (navEl.className === "globalNav") {
    navEl.className += " responsive";
  } else {
    navEl.className = "globalNav";
  }
}

window.addEventListener("load",init);
