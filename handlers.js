//Joke request modules
const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke = async (req, res) => {
  const { type } = req.params;
  console.log(type);
  if (type === "dad") {
    res.status(200).json({
      status: 200,
      joke: await getDadJoke(),
    });
  } else if (type === "tronald") {
    res.status(200).json({
      status: 200,
      joke: await getTronaldDumpQuote(),
    });
  } else if (type === "geek") {
    res.status(200).json({
      status: 200,
      joke: await getGeekJoke(),
    });
  } else {
    res.status(400).json({
      status: 400,
      message:
        "These are not the jokes you are looking for. Try dad, geek, or tronald as the request parameter",
    });
  }
};

module.exports = { handleJoke };
