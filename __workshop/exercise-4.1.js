const request = require("request-promise");

const options = {
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
  },
};
// getDadJoke
const getDadJoke = async () => {
  const response = await request(options);
  const dadJoke = JSON.parse(response);
  console.log(dadJoke.joke);
  return dadJoke.joke;
};

// 4.1
// getDadJoke().then((data) => console.log(data));
// getDadJoke();

module.exports = { getDadJoke };
