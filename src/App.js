import { ThemeProvider } from "styled-components";

//components
import Header from "./Components/Header/Header";

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
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
