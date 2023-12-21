async function getData() {
  var number = $("#numberInput").val();
  var countryCode = $("#countryCode").val();
  $("#search-button").click(function (event) {
    event.preventDefault();
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://true_caller-api.p.rapidapi.com/",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "2a1c572212msh9e5d1cd08c9376ap1d134bjsnceccdc52582f",
        "X-RapidAPI-Host": "true_caller-api.p.rapidapi.com",
      },
      processData: false,
      data:
        '{\n    "number": ' +
        number +
        ',\n    "country_code": ' +
        countryCode +
        "\n}",
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  });
}
// $("#search-button").click(function () {
//   var number = $("#numberInput").val();
// //   var countryCode = $("#countryCode").val();

//   console.log(typeof number, $(this), response);
// });
getData();
