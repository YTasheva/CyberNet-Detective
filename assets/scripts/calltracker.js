async function getData() {

    var number = $("#numberInput").val();
    var countryCode = $("#numberInput").val();
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
      data: '{\n    "number":' + String(number) + ',\n    "country_code": '+ String(countryCode) +'\n}',
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
}

getData();