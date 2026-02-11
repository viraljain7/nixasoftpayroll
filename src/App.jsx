import Navbar from "@/helperComponents/Navbar";
import HeroPage from "@/pages/HeroPage";
import Footer from "./helperComponents/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import { EngagePage } from "./pages/EngagePage";
import EnterPrisePage from "./pages/EnterPrisePage";

const App = () => {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/engage" element={<EngagePage />} />
          <Route path="/payroll-enterprise" element={<EnterPrisePage />} />


        </Routes>
      </BrowserRouter>
      ,
      <Footer />
    </div>
  );
};

export default App;
