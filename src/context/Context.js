import React, { useState, createContext } from "react";

export const Modules = createContext("");
export const Components = createContext("");

const Store = ({ children }) => {
  const defaultValueModules = {};
  const defaultValueComponents = {};

  const [modules, setModules] = useState([defaultValueModules]);
  const [components, setComponents] = useState([defaultValueComponents]);

  return (
    <Modules.Provider value={[modules, setModules]}>
      <Components.Provider value={[components, setComponents]}>
        {children}
      </Components.Provider>
    </Modules.Provider>
  );
};

export default Store;