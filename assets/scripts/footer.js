document.addEventListener("DOMContentLoaded", function () {
  var year = new Date().getFullYear();
  var yearHolders = document.querySelectorAll(".current-year");
  yearHolders.forEach(function (el) {
    el.textContent = year;
  });
});
