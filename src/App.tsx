import React, { useState } from "react";
import * as style from "./app.style";
import GlobalStyle from "./global.styles";
import { Item } from "./types/item";
import ListItem from "./components/listItem/ListItem";
import AddArea from "./components/addArea/AddArea";
function App() {
  const [list, setList] = useState<Item[]>([]);

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
      <style.Header>
        <h1> Lista de Tarefas</h1>
      </style.Header>
      <style.Content>
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
      </style.Content>
    </>
  );
}

export default App;
