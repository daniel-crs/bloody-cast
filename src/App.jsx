import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./screens/Home";
import { PodCast } from "./screens/PodCast";

import "./global.css"

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PodCast" element={<PodCast />} />
      </Routes>
    </Router>
  );
}