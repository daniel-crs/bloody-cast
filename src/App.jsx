import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./screens/Home";
import { PodCast } from "./screens/PodCast";
import { Movie } from "./screens/Movie";
import { Books } from "./screens/Books";
import { Music } from "./screens/Music";
import { Games } from "./screens/Games";
import { StandardPost } from "./screens/StandardPost";
import { StandardPodcastPost } from "./screens/StandardPodcastPost";
import { NotFound } from "./screens/NotFound";

import "./global.css"

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Podcast" element={<PodCast />} />
        <Route path="/Filmes" element={<Movie />} />
        <Route path="/Livros" element={<Books />} />
        <Route path="/Musicas" element={<Music />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Postagem/:tag/:id" element={<StandardPost />} />
        <Route path="/Postagem/Podcast/:id" element={<StandardPodcastPost />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
}