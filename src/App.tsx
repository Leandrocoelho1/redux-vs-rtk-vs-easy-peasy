import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import main from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={main}>
      <div>
        <GlobalStyles />
        <h1>Todo App!!</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
