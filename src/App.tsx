// src/App.tsx
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { About } from "./components/About/About";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
    </>
  );
}

export default App;
