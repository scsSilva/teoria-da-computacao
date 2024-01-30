import { createContext, useState } from "react";
import { foods } from "../utils";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [comidas, setComidas] = useState(foods);

  return (
    <GlobalContext.Provider value={{ total, setTotal, comidas, setComidas }}>
      {children}
    </GlobalContext.Provider>
  );
};
