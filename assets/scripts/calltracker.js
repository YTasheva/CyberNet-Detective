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
        "X-RapidAPI-Key": "6ddaa51237mshe5dca3f57aaf9eap1694c4jsnc5f95fdfc5c3",
        "X-RapidAPI-Host": "truecaller4.p.rapidapi.com",
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response.timestamp, response.status, response);
    });
  });
}

getData();

// key1 = e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e;
// key2 = a4a9148c55mshd51a0247b343d9ep18b62ejsn9b26d87bdecb
// key3 = 6ddaa51237mshe5dca3f57aaf9eap1694c4jsnc5f95fdfc5c3
// key4 = 2a1c572212msh9e5d1cd08c9376ap1d134bjsnceccdc52582f
// const iso3166 = require('iso-3166-1-alpha-2');

// // Get the country name by code
// const countryName = iso3166.getCountry('US');
// console.log(countryName);  // Output: United States

// // Get the country code by name
// const countryCode = iso3166.getCode('United States');
// console.log(countryCode);  // Output: US
// key1 = a4a9148c55mshd51a0247b343d9ep18b62ejsn9b26d87bdecb
// key2 = 6ddaa51237mshe5dca3f57aaf9eap1694c4jsnc5f95fdfc5c3