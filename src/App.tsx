import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Movies } from "./components/Movies";
import { Podcast } from "./components/Podcasts";
import Nav from "./components/Navbar";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="Movies" element={<Movies />} />
        <Route path="Podcasts" element={<Podcast />} />
      </Routes>
    </div>
  );
}

export default App;
