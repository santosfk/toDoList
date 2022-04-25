import React from "react";
import { createContext, useState } from "react";

interface UserDataProps {
  themeChange: boolean;
  setThemeChange: Function;
}
export const contextThemeChange = createContext({} as UserDataProps);

export default function ThemeChangeContext({ children }: any) {
  const [themeChange, setThemeChange] = useState<boolean>(false);
  return (
    <contextThemeChange.Provider value={{ themeChange, setThemeChange }}>
      {children}
    </contextThemeChange.Provider>
  );
}
