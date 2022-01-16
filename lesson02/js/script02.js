function homePageOnLoad() {
    populateYearInFooter();
    populateLastUpdatedInFooter();
  }
  
  function populateYearInFooter() {
    var x = document.getElementById("content");
    x.querySelector(".currentyear").innerHTML = new Date().getFullYear();
  }
  
  function populateLastUpdatedInFooter() {
    var x = document.getElementById("content");
    x.querySelector(".lastupdatedate").innerHTML = document.lastModified;
  }