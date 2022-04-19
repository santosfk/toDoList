import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import GlobalStyle from "./global.styles";
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
