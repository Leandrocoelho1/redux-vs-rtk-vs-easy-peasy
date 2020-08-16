import React from "react";

// --> Redux and RTK
// import { useSelector } from "react-redux";

// --> Easy-peasy
import { useStoreState } from "../../easy-peasy";

import { Container } from "./styles";

const Counter: React.FC = () => {
  // --> Redux and RTK
  // const updatesCounter = useSelector((state: State) => state.counter);

  // --> Easy-peasy
  const updatesCounter = useStoreState((state) => state.counter.value);

  return (
    <Container>
      <h2>Updates Counter: {updatesCounter}</h2>
    </Container>
  );
};

export default Counter;
