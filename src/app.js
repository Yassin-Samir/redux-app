// @ts-nocheck
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./redux/slice";
import adduser from "./redux/api";
export default function App(props) {
  const handle = (e) => {
    e.preventDefault();
    adduser(document.querySelector('input[type="text"]').value, dis);
  };
  const dis = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  return (
    <form onSubmit={handle}>
      <input type="text" placeholder="Enter name" />
      {loading ? "Loading" : <input type="submit" value="submit" />}
    </form>
  );
}
