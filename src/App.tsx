import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import main from "./styles/theme";
import Info from "./components/Info";
import Form from "./components/Form";
import Todos from "./components/Todos";
import Counter from "./components/Counter";
import { Container, Header } from "./styles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyles />
      <Info />
      <Container>
        <main>
          <Header>
            <h1>Todo App</h1>
            <span>Another</span>
          </Header>
          <Form />
          <Todos />
          <Counter />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
