import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

const GlobalContextProvider = ({ children }) => {
  // To add variables inside to the context
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(
          "https://api.stg.hayu.com/page/home?platform=web"
        );
        response = await response.json();
        setData(response);
      } catch (e) {
        console.error(`Error from database -- ${e}`);
      }
    };

    getData();
  }, []);

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
