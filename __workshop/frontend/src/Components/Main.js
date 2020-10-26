import React from "react";
import styled from "styled-components";

const Container = styled.main`
  height: calc(100vh - 360px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .blue {
    background: linear-gradient(to right, #fc5c7d, #6a82fb);
  }
  .green {
    background: linear-gradient(to right, #00b09b, #96c93d);
  }
  .orange {
    background: linear-gradient(to right, #fc4a1a, #f7b733);
  }
`;

const Button = styled.button`
  margin: 15px 0;
  border: none;
  width: 400px;
  height: 200px;
  border-radius: 15px;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  box-shadow: inset 4px 4px 15px rgba(255, 255, 255, 0.4),
    inset -4px -4px 15px rgba(0, 0, 0, 0.2), 4px 4px 15px rgba(0, 0, 0, 0.4),
    0 0 10px rgba(0, 0, 0, 0.2);
  text-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
    transform: scale(0.98);
  }
`;

export const Main = ({ buttonHandler }) => {
  return (
    <Container>
      <Button className="blue" onClick={buttonHandler} id="dad">
        Get Dad Joke
      </Button>
      <Button className="green" onClick={buttonHandler} id="trump">
        Get U.S. President Quote
      </Button>
      <Button className="orange" onClick={buttonHandler} id="geek">
        Get Geek Joke
      </Button>
    </Container>
  );
};
