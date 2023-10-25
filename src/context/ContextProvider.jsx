import React, { createContext, useContext, useState } from "react";
import myData from "../data/data.json";

const Context = createContext();
export const useData = () => useContext(Context);

const ContextProvider = ({ children }) => {
  const [data, setData] = useState(myData.emailData);
  const [selectCategory, setSelectCategory] = useState([]);
  const [input, setInput] = useState("");
  const [selectOption, setSelectOption] = useState("");

  return (
    <div>
      <Context.Provider
        value={{
          data,
          setData,
          selectCategory,
          setSelectCategory,
          input,
          setInput,
          selectOption,
          setSelectOption,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export default ContextProvider;
