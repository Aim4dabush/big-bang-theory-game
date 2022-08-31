import { ThemeProvider } from "styled-components";

//styles
import { GlobalStyles } from "./styles/Global";
import { MainContainer } from "./styles/Container";
import { theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer>App</MainContainer>
    </ThemeProvider>
  );
}

export default App;
