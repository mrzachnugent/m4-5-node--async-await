import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  background: linear-gradient(to right, #11998e, #38ef7d);
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.4);
`;
const Title = styled.div`
  font-size: 99px;
  color: #fff;
  font-weight: 900;
  text-shadow: 4px 4px 15px rgba(0, 0, 0, 0.4);
`;

const Subtitle = styled.p`
  padding-top: 25px;
  font-size: 32px;
  font-weight: 600;
  color: #fff;
`;

export const Hero = () => {
  return (
    <HeroContainer>
      <Title>JOKES !</Title>
      <Subtitle>You need'em, we got'em! 🤣</Subtitle>
    </HeroContainer>
  );
};
