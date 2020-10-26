import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const X = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 0;
  right: 15px;
  font-size: 30px;
  opacity: 0.6;
  cursor: pointer;
  padding: 10px;
  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

const AnotherBtn = styled.button`
  margin: 45px 0 0 0;
  border: none;
  width: 200px;
  height: 50px;
  border-radius: 7px;
  font-size: 21px;
  font-weight: 700;
  color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to right, #fc4a1a, #f7b733);
  text-shadow: 4px 4px 15px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }
`;

const backDropVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "100px",
    opacity: 1,
    transition: { delay: 0.2 },
  },
};

const Text = styled.p`
  text-align: center;
`;

export const Modal = ({ showModal, setShowModal, joke, jokeType, setJoke }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backDropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <X
              onClick={() => {
                setShowModal(false);
              }}
            >
              ✖
            </X>
            <Text>{joke}</Text>
            <AnotherBtn
              onClick={() => {
                console.log(jokeType);
                fetch(`/joke/${jokeType}`)
                  .then((res) => res.json())
                  .then((result) => setJoke(result.joke));
              }}
            >
              Another one!
            </AnotherBtn>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
