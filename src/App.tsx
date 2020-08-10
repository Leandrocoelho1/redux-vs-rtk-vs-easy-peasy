import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import main from "./styles/theme";
import { Container, Header, Form, TodoList, Counter } from "./styles";
import { MdAdd } from "react-icons/md";

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyles />
      <Container>
        <main>
          <Header>
            <h1>Todo App</h1>
            <span>Another</span>
          </Header>
          <Form>
            <h2>Add new Todo:</h2>
            <div>
              <input type="text" />
              <button>
                <MdAdd size={20} />
              </button>
            </div>
          </Form>
          <TodoList>
            <h2>Your Todos</h2>
            <div></div>
          </TodoList>
          <Counter>
            <h2>Updates Counter: 0</h2>
          </Counter>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
