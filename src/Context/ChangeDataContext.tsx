import React, { ReactChild } from "react";
import { createContext, useState } from "react";

interface UserDataProps {
  changeDataContext: boolean;
  setChangeDataContext: Function;
}
export const ChangeData = createContext({} as UserDataProps);

export default function ChangeDataContext({ children }: any) {
  const [changeDataContext, setChangeDataContext] = useState<boolean>(false);
  return (
    <ChangeData.Provider value={{ changeDataContext, setChangeDataContext }}>
      {children}
    </ChangeData.Provider>
  );
}
