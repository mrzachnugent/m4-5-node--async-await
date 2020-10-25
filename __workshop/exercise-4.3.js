const request = require("request-promise");

const options = {
  url: "https://geek-jokes.sameerkumar.website/api?format=json",
  method: "GET",
};

const getGeekJoke = async () => {
  const response = await request(options);
  const geekJokeObj = JSON.parse(response);
  console.log(geekJokeObj.joke);
  return geekJokeObj.joke;
};

// getGeekJoke();

module.exports = { getGeekJoke };
