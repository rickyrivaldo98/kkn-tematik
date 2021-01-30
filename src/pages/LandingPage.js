// import { Container, Input, Label, FormGroup, Button, Form } from "reactstrap";
import Banner from "./components/Banner";
import Alasan from "./components/Alasan";
import Rekomen from "./components/Rekomen";
import Gallery from "./components/Gallery";
import Komentar from "./components/Komentar";
import EndPage from "./components/EndPage";
import TourPackage from "./components/TourPackage";
import BarangDepan from "./components/BarangDepan";

// import "./assets/css/style.css";
const LandingPage = () => {
  return (
    <>
      <div>
        <Banner />
        <Alasan />
        <TourPackage />
        <BarangDepan />
        <Rekomen />
        <Gallery />
        <Komentar />
        <EndPage />
      </div>
    </>
  );
};

export default LandingPage;
