import React, { useState } from "react";
import { Hero } from "./Components/Hero";
import { Main } from "./Components/Main";
import { GlobalStyles } from "./GlobalStyles";
import { Modal } from "./Components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [jokeType, setJokeType] = useState("");
  const [joke, setJoke] = useState("");

  const buttonHandler = (e) => {
    if (e.target.id === "dad") {
      fetch("/joke/dad")
        .then((res) => res.json())
        .then((result) => setJoke(result.joke));
      setJokeType("dad");
      setShowModal(true);
    } else if (e.target.id === "trump") {
      fetch("/joke/tronald")
        .then((res) => res.json())
        .then((result) => setJoke(result.joke));
      setJokeType("tronald");
      setShowModal(true);
    } else if (e.target.id === "geek") {
      fetch("/joke/geek")
        .then((res) => res.json())
        .then((result) => setJoke(result.joke));
      setJokeType("geek");
      setShowModal(true);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        jokeType={jokeType}
        joke={joke}
        setJoke={setJoke}
      />
      <Hero />
      <Main buttonHandler={buttonHandler} />
    </>
  );
}

export default App;
