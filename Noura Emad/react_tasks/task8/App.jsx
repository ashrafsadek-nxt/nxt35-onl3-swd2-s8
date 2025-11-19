



import { Routes, Route } from 'react-router-dom';
import MainLayout from './Components/Mainlayout';
import Home from './Pages2/Home';
import About from './Pages2/About';
import Link1 from './Pages2/Link1';
import Link2 from './Pages2/Link2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        
        
        <Route path="link1" element={<Link1 />} />
        <Route path="link2" element={<Link2 />} />
      </Route>
    </Routes>
  );
}

export default App;