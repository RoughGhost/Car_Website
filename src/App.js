import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Popular from "./components/Popular/Popular";
import Features from "./components/Features/Features";
import Featured from "./components/Featured/Featured";
import Offer from "./components/Offer/Offer";
import Logos from "./components/Logos/Logos";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Home />
        <About />
        <Popular />
        <Features />
        <Featured />
        <Offer />
        <Logos />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
