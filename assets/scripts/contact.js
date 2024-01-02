  $(document).ready(function () {
    $("#contactForm").submit(function (e) {
      e.preventDefault(); // Prevent the form from submitting
          $("#exampleModal").modal("show");

      
      setTimeout(function () {
        $("#exampleModal").modal("hide");
      }, 4000); 
    });
  });

