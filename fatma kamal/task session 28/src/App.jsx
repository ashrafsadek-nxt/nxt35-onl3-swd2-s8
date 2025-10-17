import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/loyaut/Navbar";
import Sidebar from "./assets/loyaut/Sidebar";
import Home from './pages/Home';
import About from './pages/About';
import Contant from './pages/Contant';
import List from './pages/List';
import './App.css';

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contant" element={<Contant />} />
              <Route path="/list" element={<List />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
