import React, { useState } from "react";
import * as style from "./app.style";
import GlobalStyle from "./global.styles";
import { Item } from "./types/item";
import ListItem from "./components/listItem/ListItem";
function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "compra um boi... tatá", done: false },
  ]);
  return (
    <>
      <GlobalStyle />
      <style.Header>
        <h1> Lista de Tarefas</h1>
      </style.Header>
      <style.Content>
        {list.map((item, index) => (
          <ListItem />
        ))}
      </style.Content>
    </>
  );
}

export default App;
