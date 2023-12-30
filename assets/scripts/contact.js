$(document).ready(function () {
    // Contact Form Submission
    $("#contactForm").submit(function (e) {
      e.preventDefault();
  
      // Display Bootstrap modal
      $("#myModal").modal("show");
  
      // Resets the form
      $("#contactForm")[0].reset();
    });
  });
  