import React from "react";
import { Switch, Route } from "react-router-dom";
import NavbarTop from "./pages/layout/NavbarTop";
import FooterBot from "./pages/layout/FooterBot";
import LandingPage from "./pages/LandingPage";
import PanduanWisata from "./pages/PanduanWisata";
import Pemesanan from "./pages/Pemesanan";
import Tentang from "./pages/Tentang";
import Galeri from "./pages/Galeri";
// import "./App.css";
// import "./pages/assets/css/style.css";

const App = () => {
  return (
    <>
      <NavbarTop />
      <Switch>
        <Route path="/pemesanan">
          <Pemesanan />
        </Route>
        <Route path="/tentang">
          <Tentang />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
      <FooterBot />
    </>
  );
};

export default App;
