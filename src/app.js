// @ts-nocheck
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendData, start } from "./redux/slice";
export default function App() {
  let input;
  React.useEffect(() => {
    input = document.querySelector("input[type='text']");
  }, []);
  const handle = (e) => {
    e.preventDefault();
    dis(start());
    input.setAttribute("readonly", true);
    setTimeout(() => {
      dis(
        sendData({
          name: input.value,
        })
      );
      input.value = "";
      input.removeAttribute("readonly");
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
