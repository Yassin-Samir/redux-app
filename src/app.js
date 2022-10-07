// @ts-nocheck
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendData, start } from "./redux/slice";
export default function App() {
  const input = React.useRef(null);
  const span = React.useRef(null);
  let [num, setNum] = React.useState(4);
  const handle = (e) => {
    e.preventDefault();
    if (input.current.value) {
      span.current.classList.add("hidden");
      span.current.classList.remove("visible");
      input.current.classList.remove("shake");
      dis(start());
      input.current.setAttribute("readonly", true);
      setTimeout(() => {
        dis(
          sendData({
            name: input.current.value,
          })
        );
        input.current.value = "";
        input.current.removeAttribute("readonly");
        setNum(4);
      }, 5000);
      const interval = setInterval(() => {
        if (num) setNum(num--);
        else clearInterval(interval);
      }, 1000);
    } else {
      span.current.classList.remove("hidden");
      span.current.classList.add("visible");
      input.current.classList.add("shake");
    }
  };
  const dis = useDispatch();
  const { loading } = useSelector((state) => state);
  return (
    <form onSubmit={handle}>
      <input type="text" placeholder="Enter name" ref={input} />
      <span className="span hidden" ref={span}>
        required
      </span>
      {loading ? (
        <p style={{ width: "100%", textAlign: "center" }}>{num}</p>
      ) : (
        <input type="submit" value="submit" />
      )}
    </form>
  );
}
