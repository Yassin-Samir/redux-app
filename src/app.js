// @ts-nocheck
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slice";
export default function App(props) {
  const { count } = useSelector((state) => state.counter);
  const dis = useDispatch();
  return (
    <div className="root1">
      <button
        onClick={() => {
          dis(increment());
        }}
      >
        Increment
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          dis(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
}
