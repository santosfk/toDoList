import React, { useState } from "react";
import * as style from "./style";
type Props = {
  onAdd: (taskName: string) => void;
};
function AddArea({ onAdd }: Props) {
  const [receiveText, setReceiveText] = useState("");
  const taskAdd = () => {
    if (receiveText !== "") {
      onAdd(receiveText);
    }
  };
  return (
    <style.Container>
      <button onClick={taskAdd}>Adicionar</button>
      <input
        type="text"
        placeholder="digite sua tarefa"
        value={receiveText}
        onChange={(e) => setReceiveText(e.target.value)}
      />
    </style.Container>
  );
}

export default AddArea;
