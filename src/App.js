import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Clinic from "./pages/Clinic";
import Commercial from "./pages/Commercial";
import GymCleaning from "./pages/GymCleaning";
import Home from "./pages/Home";
import OfficeCleaning from "./pages/OfficeCleaning";
import Restaurant from "./pages/Restaurant";
import School from "./pages/School";
import "./style/global.css";
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
