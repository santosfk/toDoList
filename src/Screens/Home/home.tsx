import React, { useState } from "react";
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
  const getData = async () => {
    const taskRef = collection(database, "user");
    const data = await getDocs(taskRef);
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <stc.Content>
        <AddArea />
      </stc.Content>
    </>
  );
}
