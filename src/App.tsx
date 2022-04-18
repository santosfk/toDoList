import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
