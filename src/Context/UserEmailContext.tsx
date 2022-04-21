import React, { ReactChild } from "react";
import { createContext, useState } from "react";

interface UserDataProps {
  userReceiveEmail: string;
  setUserReceiveEmail: Function;
}
export const UserEmail = createContext({} as UserDataProps);

export default function UserEmailContext({ children }: any) {
  const [userReceiveEmail, setUserReceiveEmail] = useState<string>("");
  return (
    <UserEmail.Provider value={{ userReceiveEmail, setUserReceiveEmail }}>
      {children}
    </UserEmail.Provider>
  );
}
