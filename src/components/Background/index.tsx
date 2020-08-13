import React from "react";
import styled from "styled-components";

import bg from "../../assets/bg.png";

const Container = styled.img`
  position: absolute;
  bottom: 4.6rem;
  left: 50%;
  z-index: -1;
  transform: translateX(13rem);
  height: 31.6rem;
  width: 31.6rem;
  opacity: 0.9;
`;

const Background: React.FC = () => {
  return <Container src={bg} alt="Absurd image" />;
};

export default Background;
