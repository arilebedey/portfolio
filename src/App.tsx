// src/App.tsx
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Vision from "./components/Vision/Vision";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Vision />
    </>
  );
}

export default App;
