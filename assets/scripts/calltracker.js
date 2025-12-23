$(function () {
  const $form = $("#search-form");
  const $number = $("#number-input");
  const $country = $("#country-code");
  const $status = $("#search-status");
  const $searchList = $(".search-list");
  const $formCard = $(".form-card");
  const $infoTable = $("#info");
  const resultModal = new bootstrap.Modal(document.getElementById("search"));

  // Entry animations for the hero and cards
  $(".bannerip h1").hide().fadeIn(750);
  $formCard.css({ opacity: 0, top: "24px" }).animate({ opacity: 1, top: "0" }, 600);
  $(".info-card").css({ opacity: 0, top: "24px" }).delay(150).animate({ opacity: 1, top: "0" }, 650);

  // Subtle focus style on inputs
  $(".input-group input").on("focus", function () {
    $(this).closest(".input-group").addClass("shadow-sm border-primary");
  });
  $(".input-group input").on("blur", function () {
    $(this).closest(".input-group").removeClass("shadow-sm border-primary");
  });

  const shakeCard = () => {
    $formCard
      .stop(true, true)
      .animate({ marginLeft: "-6px" }, 80)
      .animate({ marginLeft: "6px" }, 80)
      .animate({ marginLeft: "0px" }, 80);
  };

  const renderResult = (payload) => {
    const owner = payload?.name || "Unknown";
    const carrier = payload?.carrier || "Not provided";
    const city = payload?.addresses?.[0]?.city || "Not provided";
    const country = payload?.addresses?.[0]?.countryCode || $country.val().toUpperCase() || "N/A";
    const spamType = payload?.spamInfo?.spamType || "Unknown";
    const spamColor = spamType === "TOP_SPAMMER" ? "text-warning" : "text-light";
    const spamLabel = spamType === "TOP_SPAMMER" ? "Likely spam" : "Safe/unknown";

    $searchList.removeClass("text-danger text-success").addClass(spamColor).text(spamLabel);
    $infoTable.html(`
      <tr><th scope="row">Owner</th><td>${owner}</td></tr>
      <tr><th scope="row">Carrier</th><td>${carrier}</td></tr>
      <tr><th scope="row">City</th><td>${city}</td></tr>
      <tr><th scope="row">Country</th><td>${country}</td></tr>
      <tr><th scope="row">Spam status</th><td class="${spamColor}">${spamLabel}</td></tr>
    `);
    resultModal.show();
  };

  $form.on("submit", function (event) {
    event.preventDefault();
    const number = $number.val().trim();
    const countryCode = ($country.val().trim() || "US").toUpperCase();

    if (!number) {
      $status.removeClass("text-success text-primary").addClass("text-danger").text("Enter a phone number to start a lookup.");
      shakeCard();
      return;
    }

    $status.removeClass("text-danger text-success").addClass("text-primary").text("Searching...");
    $("#search-button").prop("disabled", true);

    const settings = {
      async: true,
      crossDomain: true,
      url: `https://truecaller4.p.rapidapi.com/api/v1/getDetails?phone=${number}&countryCode=${countryCode}`,
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e",
        "X-RapidAPI-Host": "truecaller4.p.rapidapi.com",
      },
    };

    $.ajax(settings)
      .done(function (response) {
        const payload = response?.data?.[0] || {};
        renderResult(payload);
        $status.removeClass("text-primary text-danger").addClass("text-success").text("Lookup complete.");
      })
      .fail(function () {
        $status.removeClass("text-primary text-success").addClass("text-danger").text("We couldn't fetch details right now. Try again soon.");
      })
      .always(function () {
        $("#search-button").prop("disabled", false);
      });
  });

  $("#reset-button").on("click", function () {
    $number.val("");
    $country.val("");
    $status.text("");
    $searchList.removeClass("text-danger text-success").text("No checks yet");
    $infoTable.empty();
    shakeCard();
  });

  $(".closeMod").on("click", function () {
    resultModal.hide();
  });
});
