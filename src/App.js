import { ThemeProvider } from "styled-components";

//components
import Board from "./Components/Board/Board";
import Header from "./Components/Header/Header";
import Rules from "./Components/Rules/Rules";

//styles
import { GlobalStyles } from "./styles/Global";
import { MainContainer } from "./styles/Container";
import { theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer>
        <Header />
        <Board />
        <Rules />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
