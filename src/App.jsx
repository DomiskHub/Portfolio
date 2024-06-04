import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";
import Projects from "./components/Projects";
import Exp from "./components/Exp";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/experiencia" element={<Exp />} />
      </Routes>
    </div>
  );
}

export default App;
