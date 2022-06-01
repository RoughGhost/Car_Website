import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Popular from "./components/Popular/Popular";
import Features from "./components/Features/Features";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Home />
        <About />
        <Popular />
        <Features />
      </div>
    </div>
  );
}

export default App;
