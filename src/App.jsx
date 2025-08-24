import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Translator from "./pages/Translator";
import RandomStringGenerator from "./pages/RandomStringGenerator";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translate" element={<Translator />} />
        <Route path="/random" element={<RandomStringGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}