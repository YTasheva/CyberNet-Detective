async function getData() {
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
    data: '{"number": "1234567890",   "country_code": "in"}',
  };
  console.log(settings.data)
  $.ajax(settings).done(function (response) {
    console.log(response, "data");
  });
}

getData();
