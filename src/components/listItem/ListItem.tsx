import React, { useEffect, useState, useContext } from "react";
import { TasksWrapper, Container } from "./style";
import { doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import database from "../../services/firebase";
import TaskItem from "../TaskItem";
import { UserEmail } from "../../Context/UserEmailContext";
import { ChangeData } from "../../Context/ChangeDataContext";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../../animations/components/LoadingAnimation";
export interface DataTask {
  [id: string]: {
    title: string;
    description: string;
  };
}
function ListItem() {
  const [receiveData, setReceiveData] = useState<DataTask[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const { userReceiveEmail, setUserReceiveEmail } = useContext(UserEmail);
  const { changeDataContext, setChangeDataContext } = useContext(ChangeData);

  const navigation = useNavigate();
  const handleChangeRoute = (route: String) => {
    navigation(`/${route}`);
  };

  useEffect(() => {
    getData();
  }, [changeDataContext]);
  const getData = async () => {
    if (userReceiveEmail) {
      const taskRef = collection(database, userReceiveEmail);
      const data = await getDocs(taskRef);
      const receiveTasks = data.docs.map((doc) => ({
        ...doc.data(),
      }));
      setReceiveData(receiveTasks);
    } else {
      alert("faça login");
      handleChangeRoute("login");
    }
  };
  const deleteData = async (title: string) => {
    setLoading(true);
    await deleteDoc(doc(database, userReceiveEmail, title));
    setChangeDataContext(!changeDataContext);
    setLoading(false);
  };

  return (
    <>
      <Container>
        {loading && <LoadingAnimation />}
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
      </Container>
    </>
  );
}

export default ListItem;
