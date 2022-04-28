import React, { createContext, useState } from "react";

const Context = createContext();

const GlobalContextProvider = ({ children }) => {
  // To add variables inside to the context
  const [data, setData] = useState([]);

  return (
    <Context.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useGlobalContext = () => {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }

  return context;
};

export { GlobalContextProvider, useGlobalContext };
