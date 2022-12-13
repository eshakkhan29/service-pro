import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Clinic from "./pages/Clinic";
import Commercial from "./pages/Commercial";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import GymCleaning from "./pages/GymCleaning";
import Home from "./pages/Home";
import OfficeCleaning from "./pages/OfficeCleaning";
import CommercialForm from "./pages/pagesForm/CommercialForm";
import Restaurant from "./pages/Restaurant";
import School from "./pages/School";
import "./style/global.css";
import "./style/servicePage.css";
import "./style/pageForm.css";
import "./style/media.css";
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
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/commercial-form" element={<CommercialForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
