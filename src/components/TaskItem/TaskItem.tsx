import React, { useState } from "react";
import {
  Container,
  Title,
  Description,
  IconsWrapper,
  ViewContent,
} from "./style";
import { DataTask } from "../listItem/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox } from "@mui/material";

export default function TaskItem({ title, description }: DataTask) {
  const [boxChecked, setBoxChecked] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  return (
    <Container
      boxChecked={boxChecked}
      showDescription={showDescription}
      onClick={() => setShowDescription(!showDescription)}
    >
      <ViewContent>
        <Title boxChecked={boxChecked}>{title}</Title>
        <IconsWrapper>
          <DeleteIcon />
          <Checkbox onChange={() => setBoxChecked(!boxChecked)} />
        </IconsWrapper>
      </ViewContent>
      {showDescription && <Description>{description}</Description>}
    </Container>
  );
}
