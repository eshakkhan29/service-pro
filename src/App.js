import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUs from "./pages/AboutUs";
import Clinic from "./pages/Clinic";
import Commercial from "./pages/Commercial";
import ContactUs from "./pages/ContactUs";
import GymCleaning from "./pages/GymCleaning";
import Home from "./pages/Home";
import OfficeCleaning from "./pages/OfficeCleaning";
import Restaurant from "./pages/Restaurant";
import School from "./pages/School";
import "./style/global.css";
import "./style/servicePage.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/office" element={<OfficeCleaning />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/gym" element={<GymCleaning />} />
        <Route path="/clinic" element={<Clinic />} />
        <Route path="/school" element={<School />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
