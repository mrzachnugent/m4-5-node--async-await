const request = require("request-promise");

const options = {
  uri: "https://api.tronalddump.io/random/quote",
  headers: {
    Accept: "application/json",
  },
};

const getTronaldDumpQuote = async () => {
  const response = await request(options);
  const quoteObj = JSON.parse(response);
  console.log(quoteObj.value);
  return quoteObj.value;
};

// getTronaldDumpQuote();

module.exports = { getTronaldDumpQuote };
