//import {useGlobalContext} from "./ExampleContext"
import { NameContext } from "./ExampleContext";
import { useContext } from "react";
export function Sample2() {
  //const name=  useGlobalContext()
  const name = useContext(NameContext);
  return <h1>Hi {name}🥳🥳🥳</h1>;
}
