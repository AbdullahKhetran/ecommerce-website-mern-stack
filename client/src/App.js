import styled, { ThemeProvider } from "styled-components"
import {lightTheme} from "./utils/Themes"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";

// stlyed componend with custom css
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar>

          </Navbar>
        </Container>
      </BrowserRouter>      
        
    </ThemeProvider>
  );
}

export default App;
