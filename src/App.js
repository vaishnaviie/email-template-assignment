import "./App.css";
import BodySection from "./components/bodySection/BodySection";
import HeroSection from "./components/heroSection/HeroSection";

function App() {
  return (
    <div className="app">
      <div>
        <HeroSection />
        <BodySection />
      </div>
    </div>
  );
}

export default App;
