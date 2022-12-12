import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Home from "./pages/Home";
import "./style/global.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
