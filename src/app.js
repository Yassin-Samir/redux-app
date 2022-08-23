// @ts-nocheck
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./redux/slice";
export default function App(props) {
  const handle = (e) => {
    dis(add({ name: document.querySelector('input[type="text"]').value }));
  };
  const dis = useDispatch();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Enter name" onChange={handle} />
    </form>
  );
}
