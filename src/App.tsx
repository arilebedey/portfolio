// src/App.tsx
import "./App.css";

import { Navbar } from "./widgets/Navbar";
import { HeroSection } from "./widgets/HeroSection";
import { About } from "./widgets/About";
import { Vision } from "./widgets/Vision";

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
