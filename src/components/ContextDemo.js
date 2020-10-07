import React, { createContext, useContext } from "react";

const MyContext = createContext();

const MyComponent1 = () => {
  const state = useContext(MyContext);
  return <h1>My name is {state.name}</h1>;
};

const MyComponent2 = () => {
  const state = useContext(MyContext);
  return <h1>My age is {state.dept}</h1>;
};

const ContextDemo = () => {
  return (
    <MyContext.Provider value={{ name: "Parth", dept: "Computer" }}>
      <MyComponent1 />
      <MyComponent2 />
    </MyContext.Provider>
  );
};

export default ContextDemo;
