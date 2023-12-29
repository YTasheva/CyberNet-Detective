async function getData() {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://true_caller-api.p.rapidapi.com/",
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "6ddaa51237mshe5dca3f57aaf9eap1694c4jsnc5f95fdfc5c3",
      "X-RapidAPI-Host": "true_caller-api.p.rapidapi.com",
    },
    processData: false,
    data: '{"number": "1234567890",   "country_code": "in"}',
  };
  console.log(settings.data)
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

getData();
