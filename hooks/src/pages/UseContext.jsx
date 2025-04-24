import { useState, createContext, useContext } from "react";

const GlobalContext = createContext();

// console.log(GlobalContext);

export const UseContext = () => {
  const [state, setState] = useState("React JS👑");
  return (
    <GlobalContext.Provider value={state}>
      <main className="text-center my-5 text-3xl">
        <h1>UseContext</h1>
        <Component1 data={state} />
      </main>
    </GlobalContext.Provider>
  );
};

export const Component1 = () => {
  return (
    <div className="my-5">
      <h1>Component1</h1>
      <Component2 />
    </div>
  );
};
export const Component2 = () => {
  return (
    <div className="my-5">
      <h1>Component2</h1>
      <Component3 />
    </div>
  );
};
export const Component3 = () => {
  return (
    <div className="my-5">
      <h1>Component3</h1>
      <Component4 />
    </div>
  );
};
export const Component4 = () => {
  return (
    <div className="my-5">
      <h1>Component4</h1>
      <Component5 />
    </div>
  );
};
export const Component5 = () => {
  const data = useContext(GlobalContext);

  console.log(data);

  return (
    <div className="my-5">
      <h1>Component5</h1>
      <p>Data: {data}</p>
    </div>
  );
};
