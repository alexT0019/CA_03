// Write your JavaScript script here.
function myFunction() {
    var x = document.getElementsByClassName("nav-item");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }