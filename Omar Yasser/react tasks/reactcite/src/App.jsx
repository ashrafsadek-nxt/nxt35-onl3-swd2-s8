import Navbar from "./navbar";
import Footer from "./footer";
import "./App.css";

import image1 from "./assets/4k-image-Enhanced-SR-1.png";
import image2 from "./assets/WhatsApp Image 2025-07-18 at 16.17.31_65634d50.jpg";

function App() {
  return (
    <div>
      <Navbar />

      <main className="content">
        <h1>Welcome to My Page</h1>

        <img src={image1} alt="First" className="page-image" />
        <img src={image2} alt="Second" className="page-image" />

        <h2>My Favorite Things</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}

export default App;
