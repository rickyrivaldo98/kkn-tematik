// import { Container, Input, Label, FormGroup, Button, Form } from "reactstrap";
import Banner from "./components/Banner";
import Alasan from "./components/Alasan";
import Rekomen from "./components/Rekomen";
import Galeri from "./components/Galeri";
import Komentar from "./components/Komentar";
import EndPage from "./components/EndPage";
import TourPackage from "./components/TourPackage";

// import "./assets/css/style.css";
const LandingPage = () => {
  return (
    <>
      <div>
        <Banner />
        <Alasan />
        <TourPackage />
        <Rekomen />
        <Galeri />
        <Komentar />
        <EndPage />
        {/* <h1>Halo</h1> */}
      </div>
    </>
  );
};

export default LandingPage;
