
function populateYearInFooter() {
  var x = document.getElementById("content");
  x.querySelector(".currentyear").innerHTML = new Date().getFullYear();
}
