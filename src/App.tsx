// src/App.tsx
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { About } from "./components/About/About";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
    </>
  );
}

export default App;
