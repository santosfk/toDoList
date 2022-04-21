import React, { useState } from "react";
import { Item } from "../../types/item";
import ListItem from "../../components/listItem";
import AddArea from "../../components/addArea";
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
  return (
    <>
      <stc.Content>
        <AddArea />
        <ListItem />
      </stc.Content>
    </>
  );
}
