    
async function getData() {

    var number = $("#numberInput").val();
    var countryCode = $("#countryCode").val();
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://true_caller-api.p.rapidapi.com/",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "a4a9148c55mshd51a0247b343d9ep18b62ejsn9b26d87bdecb",
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
}
// $("#search-button").click(function () {
//   var number = $("#numberInput").val();
// //   var countryCode = $("#countryCode").val();

//   console.log(typeof number, $(this), response);
// });
getData();