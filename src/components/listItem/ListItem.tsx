import React, { useEffect, useState, useContext } from "react";
import { TasksWrapper } from "./style";
import { doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import database from "../../services/firebase";
import TaskItem from "../TaskItem";
import { UserEmail } from "../../Context/UserEmailContext";
import { ChangeData } from "../../Context/ChangeDataContext";
import { useNavigate } from "react-router-dom";
export interface DataTask {
  [id: string]: {
    title: string;
    description: string;
  };
}
function ListItem() {
  const [receiveData, setReceiveData] = useState<DataTask[]>([]);
  const { userReceiveEmail, setUserReceiveEmail } = useContext(UserEmail);
  const { changeDataContext, setChangeDataContext } = useContext(ChangeData);

  const navigation = useNavigate();
  const handleChangeRoute = (route: String) => {
    navigation(`/${route}`);
  };

  useEffect(() => {
    getData();
  }, [changeDataContext]);
  const taskRef = collection(database, userReceiveEmail);
  const getData = async () => {
    const data = await getDocs(taskRef);
    const receiveTasks = data.docs.map((doc) => ({
      ...doc.data(),
    }));
    setReceiveData(receiveTasks);
  };
  const deleteData = async (title: string) => {
    await deleteDoc(doc(database, userReceiveEmail, title));
    setChangeDataContext(!changeDataContext);
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
