import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SwiperImage from "./components/Swiper/SwiperImage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>
      <SwiperImage />
    </div>
  );
}

export default App;
