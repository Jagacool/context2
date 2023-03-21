import { createContext, useContext } from "react";
import { Sample2 } from "./Sample2";

export const NameContext = createContext();

export function ExampleContext() {
  const name = "Jack";
  return (
    <NameContext.Provider value={name}>
      <div>
        <Sample />
        <Sample1 />
        <Sample2 />
      </div>
    </NameContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(NameContext);
};

function Sample() {
  const nm = useContext(NameContext);
  return <div>Welcome {nm}</div>;
}

function Sample1() {
  const nm = useContext(NameContext);
  return <h1>Hello {nm}🥳🥳🥳</h1>;
}
