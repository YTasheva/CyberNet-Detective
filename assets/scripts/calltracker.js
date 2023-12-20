// const url = "https://true_caller-api.p.rapidapi.com/lookup/";
// const options = {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//     "X-RapidAPI-Key": "2a1c572212msh9e5d1cd08c9376ap1d134bjsnceccdc52582f",
//     "X-RapidAPI-Host": "true_caller-api.p.rapidapi.com",
//   },
//   body: JSON.stringify({
//     number: "1234567890",
//     country_code: "in",
//   }),
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }


//
async function getData() {
    const url = "https://true_caller-api.p.rapidapi.com/";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "2a1c572212msh9e5d1cd08c9376ap1d134bjsnceccdc52582f",
        "X-RapidAPI-Host": "true_caller-api.p.rapidapi.com",
      },
      body: {
        number: "1234567890",
        country_code: "in",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
}

getData();