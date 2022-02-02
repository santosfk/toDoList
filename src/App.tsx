import React, { useState } from "react";
import * as style from "./app.style";
import GlobalStyle from "./global.styles";
import { Item } from "./types/item";
import ListItem from "./components/listItem/ListItem";
import AddArea from "./components/addArea/AddArea";
function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "compra um boi... tatá", done: false },
  ]);

  const ItsDone = (item: Item) => {
    const newList = list.map((newItem) => {
      if (newItem.id === item.id) {
        return {
          ...newItem,
          done: !newItem.done,
        };
      }
      return newItem;
    });

    setList(newList);
  };
  const handleTaskAdd = (taskName: string) => {
    let NewList = [...list];
    NewList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(NewList);
  };

  return (
    <>
      <GlobalStyle />
      <style.Header>
        <h1> Lista de Tarefas</h1>
      </style.Header>
      <style.Content>
        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            done={item.done}
            itsDone={() => ItsDone(item)}
          />
        ))}
        <AddArea onAdd={handleTaskAdd} />
      </style.Content>
    </>
  );
}

export default App;
