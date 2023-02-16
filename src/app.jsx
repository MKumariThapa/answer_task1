import { useState } from "preact/hooks";
import "./app.css";
import Counter from "./component/Counter";

export function App() {
  return (
    <h1 className="text-3xl font-bold ">
      <Counter />
    </h1>
  );
}
