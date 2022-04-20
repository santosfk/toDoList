import React, { useState } from "react";
import { TasksWrapper } from "./style";
import { doc, getDocs, collection } from "firebase/firestore";
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
  const getData = async () => {
    const data = await getDocs(taskRef);
    const receiveTasks = data.docs.map((doc) => ({
      ...doc.data(),
    }));
    setReceiveData(receiveTasks);
  };
  console.log(receiveData);
  return (
    <>
      <button onClick={() => getData()}>botao</button>
      <div>
        {receiveData.map((item, index) => {
          return (
            <>
              <TasksWrapper key={index}>
                <TaskItem title={item.title} description={item.description} />
              </TasksWrapper>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ListItem;
