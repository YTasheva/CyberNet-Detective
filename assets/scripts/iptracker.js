let terms = false;

$(function () {
  const $input = $("#search-input");
  const $trueValue = $("#trueValue");
  const $status = $("#search-status");
  const $mapContainer = $(".map-container");
  const $infoTable = $("#info");
  const ipCard = $(".ip-card");
  const mapCard = $(".map-card");
  const termsModal = new bootstrap.Modal(document.getElementById("terms"));
  const detailsModal = new bootstrap.Modal(document.getElementById("details"));

  getTerms();

  // Entry animations
  $(".bannerip h1").hide().fadeIn(700);
  $(".title-3d").css({ opacity: 0, top: "12px", position: "relative" }).animate({ opacity: 1, top: 0 }, 500);
  ipCard.css({ opacity: 0, top: "24px" }).animate({ opacity: 1, top: "0" }, 650);
  mapCard.css({ opacity: 0, top: "24px" }).delay(150).animate({ opacity: 1, top: "0" }, 700);

  // Focus glow
  $(".input-group input").on("focus", function () {
    $(this).closest(".input-group").addClass("shadow-sm border-primary");
  });
  $(".input-group input").on("blur", function () {
    $(this).closest(".input-group").removeClass("shadow-sm border-primary");
  });

  const shakeCard = () => {
    ipCard
      .stop(true, true)
      .animate({ marginLeft: "-6px" }, 80)
      .animate({ marginLeft: "6px" }, 80)
      .animate({ marginLeft: "0px" }, 80);
  };

  $("#saveTerms").on("click", function (event) {
    event.preventDefault();
    terms = true;
    localStorage.setItem("terms", JSON.stringify(terms));
    termsModal.hide();
  });

  $("#search-button").on("click", function (event) {
    event.preventDefault();
    $trueValue.text("");

    if (!terms) {
      termsModal.show();
      return;
    }

    const ip = $input.val().trim();
    const ipv4 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    const iPv6 = /^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$/;

    if (!ipv4.test(ip) && !iPv6.test(ip)) {
      $trueValue.addClass("text-danger").text("Not a valid IP address.");
      $status.text("");
      shakeCard();
      return;
    }

    $trueValue.removeClass("text-danger").text("");
    $status.removeClass("text-danger text-success").addClass("text-primary").text("Checking IP details...");
    $("#search-button").prop("disabled", true);
    $mapContainer.fadeTo(200, 0.35);

    getIP(ip);
    ipDetails(ip);
  });

  $("#reset-button").on("click", function () {
    $input.val("");
    $trueValue.text("");
    $status.text("");
    $infoTable.empty();
    $(".map-container").html(
      '<iframe src="https://maps.google.com/maps?q=london&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" style="border:0; height: 260px; width: 100%;" allowfullscreen></iframe>'
    );
    shakeCard();
  });

  $("#modalB").on("click", function () {
    detailsModal.show();
  });

  $(".closeMod").on("click", function () {
    detailsModal.hide();
  });

  $("#cMode").on("click", function () {
    termsModal.hide();
  });
});

/* Get detailed information about IP address */
function getIP(ip) {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://netdetective.p.rapidapi.com/query?ipaddress=" + ip,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e",
      "X-RapidAPI-Host": "netdetective.p.rapidapi.com",
    },
  };

  $.ajax(settings)
    .done(function (response) {
      $("#info").empty();
      $.each(response.result, function (title, value) {
        const $tr = $("<tr>");
        let label = title;
        let content;

        if (value === true) {
          content = '<i class="fa-solid fa-check text-success"></i>';
        } else if (value === false) {
          content = '<i class="fa-solid fa-x text-danger"></i>';
        } else {
          content = value || "—";
          label = title.substring(2) || title;
        }

        $("<th>").text(label + ": ").appendTo($tr);
        $("<td>").html(content).appendTo($tr);
        $("#info").append($tr);
      });
    })
    .fail(function () {
      $("#search-status").removeClass("text-success text-primary").addClass("text-danger").text("Could not load detailed info right now.");
    });
}

function getTerms() {
  const getTerms = JSON.parse(localStorage.getItem("terms"));
  if (getTerms !== null) {
    terms = getTerms;
  }
}

/* Get Basic details about IP address */
function ipDetails(ip) {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com/backend/ipinfo/?ip=" + ip,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e",
      "X-RapidAPI-Host": "ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com",
    },
  };

  $.ajax(settings)
    .done(function (response) {
      $("#isp").text(response.org || "—");
      $("#country").text(response.country_name || "—");
      $("#region").text(response.region || "—");
      $("#regCode").text(response.postal || "—");
      $("#host").text(response.hostname || "—");
      $("#city").text(response.city || "—");

      const lan = response.latitude;
      const lon = response.longitude;
      const map = "https://maps.googleapis.com/maps/api/staticmap?center=" + lan + "," + lon + "&zoom=12&size=600x300&key=AIzaSyCOQkNEyO14HP3c0qqf-C8_SI8pIX3nNN8";

      const mapImg = $("<img>").attr("src", map).attr("id", "gmap").addClass("w-100 h-100 object-fit-cover");
      $(".map-container").empty().append(mapImg).fadeTo(250, 1);
      $("#search-status").removeClass("text-danger text-primary").addClass("text-success").text("Lookup complete.");
    })
    .fail(function () {
      $("#search-status").removeClass("text-success text-primary").addClass("text-danger").text("We couldn't fetch IP details right now.");
    })
    .always(function () {
      $("#search-button").prop("disabled", false);
      $(".map-container").fadeTo(200, 1);
    });
}
