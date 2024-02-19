async function getData() {
  $("#search-button").click(function (event) {
    event.preventDefault();
    var number = $("#numberInput").val();
    var countryCode = $("#countryCode").val();
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

    /* Details Modal Show */
    $('#search-button').on('click', function(event) {
      $('#dsearch').modal('show');
  });
  /* Details Modal Close */
  $('.closeMod').on('click', function(event) {
      $('#search').modal('hide');
  });
  /* Terms Modal Close */
  $('#cMode').on('click', function(event) {
      $('#terms').modal('hide');
  });
  
Call Tracker
});

    $.ajax(settings).done(function (response) {
      var data = response.data[0].spamInfo.spamType;
      

        if (data === "TOP_SPAMMER") {
          $(".search-list").css("color", "red");
        } else if (data === false || data === "" || data === null) {
          $(".search-list").css("color", "green");
        }

      localStorage.setItem("spam-info", data);
      var storedData = localStorage.getItem("spam-info");
      $(".search-list").text(storedData);
    });
  });
}
$("#reset-button").on("click", function () {
  $(".search-list").empty()
});
getData();


