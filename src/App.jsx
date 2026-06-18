import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;