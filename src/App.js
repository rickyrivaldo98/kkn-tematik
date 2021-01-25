import React from "react";
import { Switch, Route } from "react-router-dom";
import NavbarTop from "./pages/layout/NavbarTop";
import FooterBot from "./pages/layout/FooterBot";
import LandingPage from "./pages/LandingPage";
// import PanduanWisata from "./pages/PanduanWisata";
// import Pemesanan from "./pages/Pemesanan";
// import TentangKami from "./pages/TentangKami";
// import Artikel from "./pages/Artikel";
import GalleryPage from "./pages/GalleryPage";
import Konten from "./pages/Konten";
import Eduwisata from "./pages/Eduwisata";

// import "./App.css";
// import "./pages/assets/css/style.css";

const App = () => {
  return (
    <>
      <NavbarTop />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route exact path="/gallery">
          <GalleryPage />
        </Route>

        <Route path="/content">
          <Konten />
        </Route>

        <Route path="/eduwisata">
          <Eduwisata />
        </Route>
      </Switch>
      <FooterBot />
    </>
  );
};

export default App;
