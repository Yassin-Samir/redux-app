// @ts-nocheck
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendData, start } from "./redux/slice";
export default function App() {
  const handle = (e) => {
    const input = document.querySelector('input[type="text"]');
    e.preventDefault();
    dis(start());
    setTimeout(() => {
      dis(
        sendData({
          name: input.value,
        })
      );
      input.value = "";
    }, 3000);
  };
  const dis = useDispatch();
  const { loading } = useSelector((state) => state);
  return (
    <form onSubmit={handle}>
      <input type="text" placeholder="Enter name" />
      {loading ? (
        <p style={{ width: "100%", textAlign: "center" }}>Loading</p>
      ) : (
        <input type="submit" value="submit" />
      )}
    </form>
  );
}
