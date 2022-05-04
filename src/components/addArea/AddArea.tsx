import React, { useState, useContext } from "react";
import * as style from "./style";
import AddModal from "../addModal";
import Github from "@mui/icons-material/GitHub";
import Sun from "@mui/icons-material/WbSunnyRounded";
import Moon from "@mui/icons-material/ShieldMoonRounded";
import { Switch } from "@mui/material";
import { contextThemeChange } from "../../Context/SwitchThemeContext";
import { Button } from "@mui/material";
function AddArea() {
  const [modalOn, setModalOn] = useState(false);
  const { themeChange, setThemeChange } = useContext(contextThemeChange);
  return (
    <style.Container>
      <style.SwitchContent>
        <Sun color={themeChange ? "disabled" : "warning"} />
        <Switch onChange={() => setThemeChange(!themeChange)} />
        <Moon color={themeChange ? "warning" : "disabled"} />
      </style.SwitchContent>
      {modalOn && <AddModal setModalOn={setModalOn} />}
      <Button
        style={styleAddButton}
        variant="contained"
        onClick={() => setModalOn(true)}
      >
        Nova Tarefa
      </Button>
      <style.GithubLink>
        <a href="https://github.com/santosfk/toDoList">
          <Github />
        </a>
      </style.GithubLink>
    </style.Container>
  );
}

const styleAddButton = {
  width: "200px",
  margin: "20px 60px",
  padding: "5px",
  fontFamily: " Open Sans, sans-serif",
  backgroundColor: "red",
};
export default AddArea;
