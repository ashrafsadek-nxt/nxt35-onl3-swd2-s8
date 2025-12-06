import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frame from "./components/Frame";
import StartPage from "./pages/StartPage";
import Catalog from "./pages/Catalog";
import Account from "./pages/Account";
import Preferences from "./pages/Preferences";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route index element={<StartPage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="account" element={<Account />} />
          <Route path="preferences" element={<Preferences />} />
        </Route>
      </Routes>
    </Router>
  );
}
