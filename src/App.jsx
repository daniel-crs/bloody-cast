import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./screens/Home";
import { PodCast } from "./screens/PodCast";
import { Movie } from "./screens/Movie";

import "./global.css"

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PodCast" element={<PodCast />} />
        <Route path="/Movie" element={<Movie />} />
      </Routes>
    </Router>
  );
}