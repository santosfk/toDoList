import React, { useState } from "react";
import ListItem from "../../components/listItem";
import AddArea from "../../components/addArea";
import * as stc from "./style";

export default function Home() {
  return (
    <>
      <stc.Content>
        <AddArea />
        <ListItem />
      </stc.Content>
    </>
  );
}
