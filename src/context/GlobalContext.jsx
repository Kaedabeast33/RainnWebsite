import { createContext, useContext, useState } from "react";
const GlobalContext = createContext(); // Use the same context for the provider and the consumer

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function GlobalContextProvider({ children }) {
  const [modal, setModal] = useState(false);

  return (
    <GlobalContext.Provider value={{ modal, setModal }}>
      {children}
    </GlobalContext.Provider>
  );
}