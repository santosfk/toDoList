import React from "react";
import { Item } from "../../types/item";
import * as styled from "./style";

type Props = {
  item: Item;
  done: boolean;
  itsDone: () => void;
  removeTask: () => void;
};
function ListItem({ item, done, itsDone, removeTask }: Props) {
  return (
    <>
      <styled.Container onClick={itsDone} done={done}>
        <label htmlFor="">{item.name}</label>
      </styled.Container>
      <styled.Remove onClick={removeTask}>X</styled.Remove>
    </>
  );
}

export default ListItem;
