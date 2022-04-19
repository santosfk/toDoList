import React, { useState } from "react";
import GlobalStyle from "../../global.styles";
import { Item } from "../../types/item";
import ListItem from "../../components/listItem/ListItem";
import AddArea from "../../components/addArea/AddArea";
import * as stc from "./style";
import {
  doc,
  collection,
  setDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import database from "../../services/firebase";
export default function Home() {
  const [list, setList] = useState<Item[]>([]);

  const getData = async () => {
    const taskRef = collection(database, "user");
    const data = await getDocs(taskRef);
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleTaskAdd = (taskName: string) => {
    const NewList = [...list];
    NewList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(NewList);
  };

  const ItsDone = (item: Item) => {
    const NewList = list.map((newItem) => {
      if (newItem.id === item.id) {
        return {
          ...newItem,
          done: !newItem.done,
        };
      }
      return newItem;
    });

    setList(NewList);
  };
  const removeTask = (item: Item) => {
    const mapList = [...list];
    const NewList = mapList.slice(item.id);
    setList(NewList);
  };
  console.log(list);

  return (
    <>
      <GlobalStyle />
      <stc.Header>
        <h1> Lista de Tarefas</h1>
      </stc.Header>
      <stc.Content>
        <AddArea onAdd={handleTaskAdd} />
        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            done={item.done}
            itsDone={() => ItsDone(item)}
            removeTask={() => removeTask(item)}
          />
        ))}
      </stc.Content>
    </>
  );
}
