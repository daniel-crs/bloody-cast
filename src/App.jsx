import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./screens/Home";
import { PodCast } from "./screens/PodCast";
import { Movie } from "./screens/Movie";
import { Books } from "./screens/Books";
import { Music } from "./screens/Music";
import { Games } from "./screens/Games";
import { StandardPost } from "./screens/StandardPost";
import { StandardPodcastPost } from "./screens/StandardPodcastPost";

import "./global.css"

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PodCast" element={<PodCast />} />
        <Route path="/Cinema" element={<Movie />} />
        <Route path="/Livros" element={<Books />} />
        <Route path="/Musicas" element={<Music />} />
        <Route path="/Jogos" element={<Games />} />
        <Route path="/Postagem/:tag/:id" element={<StandardPost />} />
        <Route path="/Postagem/PodCast/:id" element={<StandardPodcastPost />} />
      </Routes>
    </Router>
  );
}