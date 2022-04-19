import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/home";
import Signup from "./Screens/Signup/signup";

function App() {
  return (
    <Routes>
      <Route path="signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
