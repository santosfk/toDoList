import React, { useState } from "react";
import {
  Container,
  Title,
  Description,
  IconsWrapper,
  ViewContent,
  DeleteDiv,
  TitleContent,
} from "./style";
import { DataTask } from "../listItem/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox } from "@mui/material";

type data = {
  title: string;
  description: string;
};
type Props = {
  title: data;
  description: data;
  deleteData: Function;
};
export default function TaskItem({ title, description, deleteData }: Props) {
  const [boxChecked, setBoxChecked] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  return (
    <Container boxChecked={boxChecked} showDescription={showDescription}>
      <ViewContent>
        <TitleContent onClick={() => setShowDescription(!showDescription)}>
          <Title boxChecked={boxChecked}>{title}</Title>
        </TitleContent>
        <IconsWrapper>
          <DeleteDiv onClick={() => deleteData(title)}>
            <DeleteIcon />
          </DeleteDiv>
          <Checkbox onChange={() => setBoxChecked(!boxChecked)} />
        </IconsWrapper>
      </ViewContent>
      {showDescription && <Description>{description}</Description>}
    </Container>
  );
}
