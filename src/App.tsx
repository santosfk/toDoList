import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import GlobalStyle from "./global.styles";
import UserEmailContext from "./Context/UserEmailContext";
function App() {
  return (
    <>
      <UserEmailContext>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </UserEmailContext>
    </>
  );
}

export default App;
