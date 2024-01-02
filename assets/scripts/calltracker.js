async function getData() {
  $("#search-button").click(function (event) {
    event.preventDefault();
    var number = $("#numberInput").val();
    var countryCode = $("#countryCode").val();
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://true_caller-api.p.rapidapi.com/",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e",
        "X-RapidAPI-Host": "true_caller-api.p.rapidapi.com",
      },
      processData: false,
      data:
        '{\n    "number": "' +
        number +
        '",\n    "country_code": "' +
        countryCode +
        '"}',
    };
    console.log(settings.data);
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  });
}


getData();




// key1 = e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e;
// key2 = a4a9148c55mshd51a0247b343d9ep18b62ejsn9b26d87bdecb
// key3 = 6ddaa51237mshe5dca3f57aaf9eap1694c4jsnc5f95fdfc5c3
// key4 = 2a1c572212msh9e5d1cd08c9376ap1d134bjsnceccdc52582f
