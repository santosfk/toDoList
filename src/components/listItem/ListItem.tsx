import React, { useEffect, useState } from "react";
import { TasksWrapper } from "./style";
import { doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import database from "../../services/firebase";
import TaskItem from "../TaskItem";
export interface DataTask {
  [id: string]: {
    title: string;
    description: string;
  };
}
function ListItem() {
  const [receiveData, setReceiveData] = useState<DataTask[]>([]);
  const taskRef = collection(database, "tasks");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await getDocs(taskRef);
    const receiveTasks = data.docs.map((doc) => ({
      ...doc.data(),
    }));
    setReceiveData(receiveTasks);
  };
  console.log(receiveData);
  const deleteData = async (title: string) => {
    await deleteDoc(doc(database, "tasks", title));
  };
  return (
    <>
      <div>
        {receiveData.map((item, index) => {
          return (
            <>
              <TasksWrapper key={index}>
                <TaskItem
                  title={item.title}
                  description={item.description}
                  deleteData={deleteData}
                />
              </TasksWrapper>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ListItem;
