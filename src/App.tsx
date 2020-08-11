import React from "react";
import { ThemeProvider } from "styled-components";
import { MdAdd, MdModeEdit, MdDelete } from "react-icons/md";

import GlobalStyles from "./styles/global";
import main from "./styles/theme";
import Info from "./components/Info";
import { Container, Header, Form, TodoList, Counter, Todo } from "./styles";

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
          <Form>
            <h2>Add new Todo:</h2>
            <div>
              <input type="text" />
              <button type="button">
                <MdAdd size={20} />
              </button>
            </div>
          </Form>
          <TodoList>
            <h2>Your Todos</h2>
            <div>
              <Todo>
                <p>Learn Redux</p>
                <div>
                  <button type="button">
                    <MdModeEdit size={20} />
                  </button>
                  <button type="button">
                    <MdDelete size={20} />
                  </button>
                </div>
              </Todo>
            </div>
          </TodoList>
          <Counter>
            <h2>Updates Counter: 0</h2>
          </Counter>
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
