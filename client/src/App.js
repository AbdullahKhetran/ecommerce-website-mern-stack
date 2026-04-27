import styled, { ThemeProvider } from "styled-components"
import {lightTheme} from "./utils/Themes"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import { useState } from "react";
import Authentication from "./pages/Authentication";
import ShopListing from "./pages/ShopListing";
import Favorite from "./pages/Favorite"
import Cart from "./pages/Cart"
import ProductDetails from "./pages/ProductDetails";
import {useSelector} from "react-redux";
import ToastMessage from "./components/ToastMessage"

// stlyed componend with custom css
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.2s ease;
`;

function App() {
  const [openAuth, setOpenAuth] = useState(false);
  const {currentUser} = useSelector((state) => state.user);
  const {open, message, severity } = useSelector((state) => state.snackbar);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar openAuth={openAuth} setOpenAuth={setOpenAuth} currentUser={currentUser} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/shop" exact element={<ShopListing />} />
            <Route path="/favorite" exact element={<Favorite />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/shop/:id" exact element={<ProductDetails />} />
          </Routes>
          {openAuth && (
            <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth} />
          )}
          {open && (
            <ToastMessage open={open} message={message} severity={severity} />
          )}
        </Container>
      </BrowserRouter>      
        
    </ThemeProvider>
  );
}

export default App;
