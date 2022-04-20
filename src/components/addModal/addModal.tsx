import React, { useState } from "react";
import {
  Backdrop,
  Container,
  InputDescriptionTask,
  InputTitleTask,
  SubmitTaskButton,
} from "./style";
import {
  doc,
  collection,
  setDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import database from "../../services/firebase";
import AddIcon from "@mui/icons-material/Add";
type Props = {
  setModalOn: Function;
};
export default function AddModal({ setModalOn }: Props) {
  const [receiveTitle, setReceiveTitle] = useState("");
  const [receiveDescription, setReceiveDescription] = useState("");

  const taskRef = collection(database, "tasks");
  const pullData = async () => {
    await setDoc(doc(taskRef, receiveTitle), {
      title: receiveTitle,
      description: receiveDescription,
    });
  };

  return (
    <>
      <Backdrop onClick={() => setModalOn(false)} />
      <Container>
        <InputTitleTask
          placeholder="titulo da tarefa"
          onChange={(e) => setReceiveTitle(e.target.value)}
        />
        <InputDescriptionTask
          placeholder="descrição da tarefa"
          onChange={(e) => setReceiveDescription(e.target.value)}
        />
        <SubmitTaskButton onClick={() => pullData()}>
          Adicionar
          <AddIcon />
        </SubmitTaskButton>
      </Container>
    </>
  );
}