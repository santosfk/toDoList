import React, { useState, useContext } from "react";
import * as style from "./style";
import AddModal from "../addModal";
import Github from "@mui/icons-material/GitHub";
import Sun from "@mui/icons-material/WbSunnyRounded";
import Moon from "@mui/icons-material/ShieldMoonRounded";
import { Switch } from "@mui/material";
import { contextThemeChange } from "../../Context/SwitchThemeContext";
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
      <style.ButtonAddTask onClick={() => setModalOn(true)}>
        Nova Tarefa
      </style.ButtonAddTask>
      <style.GithubLink>
        <a href="https://github.com/santosfk/toDoList">
          <Github />
          veja no github
        </a>
      </style.GithubLink>
    </style.Container>
  );
}

export default AddArea;
