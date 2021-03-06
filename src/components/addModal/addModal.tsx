import React, { useState, useContext } from "react";
import {
  Backdrop,
  Container,
  InputDescriptionTask,
  SubmitTaskButton,
  CssTextField,
  TextFieldContent,
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
import { UserEmail } from "../../Context/UserEmailContext";
import { ChangeData } from "../../Context/ChangeDataContext";
import { Button } from "@mui/material";
import LoadingAnimation from "../../animations/components/LoadingAnimation";

type Props = {
  setModalOn: Function;
};
export default function AddModal({ setModalOn }: Props) {
  const [receiveTitle, setReceiveTitle] = useState("");
  const [receiveDescription, setReceiveDescription] = useState("");
  const [loading, setLoading] = useState<Boolean>(false);
  const { changeDataContext, setChangeDataContext } = useContext(ChangeData);
  const { userReceiveEmail } = useContext(UserEmail);
  const taskRef = collection(database, userReceiveEmail);
  const pullData = async () => {
    if (receiveTitle) {
      setLoading(true);
      await setDoc(doc(taskRef, receiveTitle), {
        title: receiveTitle,
        description: receiveDescription,
      });
      setModalOn(false);
      setChangeDataContext(!changeDataContext);
      setLoading(false);
    } else {
      alert("digite um titulo");
    }
  };
  const LoadingComponent = () => <LoadingAnimation />;

  return (
    <>
      <Backdrop onClick={() => setModalOn(false)} />
      <Container>
        {loading && <LoadingComponent />}
        <Button variant="outlined" onClick={() => setModalOn(false)}>
          Fechar
        </Button>
        <TextFieldContent>
          <CssTextField
            id="filled-basic"
            label="tarefa"
            placeholder="titulo da tarefa"
            onChange={(e) => setReceiveTitle(e.target.value)}
          />
        </TextFieldContent>
        <InputDescriptionTask
          placeholder="descri????o da tarefa"
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
