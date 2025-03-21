import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from './components/Home';
import BucketList from "./components/BucketList";
import PlacesToVisit from "./components/PlacesToVisit";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/bucketlist" element={<BucketList />} />
          <Route path="/places" element={<PlacesToVisit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
