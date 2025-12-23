$(function () {
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  const $form = $("#contactForm");
  const $status = $("#form-status");
  const $card = $(".contact-card");

  // Fade in cards on load
  $(".contact-card, .info-card").css({ opacity: 0, top: "16px" }).each(function (idx) {
    $(this).delay(100 * idx).animate({ opacity: 1, top: "0" }, 350);
  });

  // Focus glow
  $form.find(".form-control").on("focus", function () {
    $(this).closest(".form-control").addClass("shadow-sm");
  }).on("blur", function () {
    $(this).closest(".form-control").removeClass("shadow-sm");
  });

  const shakeCard = () => {
    $card
      .stop(true, true)
      .animate({ marginLeft: "-6px" }, 80)
      .animate({ marginLeft: "6px" }, 80)
      .animate({ marginLeft: "0px" }, 80);
  };

  $form.on("submit", function (e) {
    e.preventDefault();
    $status.removeClass("text-danger text-success").addClass("text-primary").text("Sending...");

    setTimeout(function () {
      $status.removeClass("text-primary text-danger").addClass("text-success").text("Message sent!");
      modal.show();
      setTimeout(function () {
        modal.hide();
        $form[0].reset();
        $status.text("");
      }, 2500);
    }, 600);
  });
});
