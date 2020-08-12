import React from "react";
// For Redux and RTK
import { useSelector } from "react-redux";

import { State } from "../../type";
import { Container } from "./styles";

const Counter: React.FC = () => {
  const updatesCounter = useSelector((state: State) => state.counter);
  return (
    <Container>
      <h2>Updates Counter: {updatesCounter}</h2>
    </Container>
  );
};

export default Counter;
