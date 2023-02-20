import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import Footer from "./Components/Home/Footer";
import QuickCall from "./Components/Home/QuickCall";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <QuickCall />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
