import React, { useState } from "react";
import * as style from "./style";
import AddModal from "../addModal/addModal";
function AddArea() {
  const [modalOn, setModalOn] = useState(false);
  return (
    <style.Container>
      {modalOn && <AddModal setModalOn={setModalOn} />}
      <style.ButtonAddTask onClick={() => setModalOn(true)}>
        nova tarefa
      </style.ButtonAddTask>
    </style.Container>
  );
}

export default AddArea;
