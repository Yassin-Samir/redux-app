import React, { useCallback, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendData, start } from "../../redux/slice";

function InputForm() {
  const input = useRef(null);
  const span = useRef(null);
  const [num, setNum] = useState(4);
  const [Value, setValue] = useState("");
  const dis = useDispatch();
  const { loading } = useSelector((state) => state);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!Value) {
        span.current.classList.remove("hidden");
        span.current.classList.add("visible");
        input.current.classList.remove("shake");
        setTimeout(() => input.current.classList.add("shake"), 0);
        return;
      }
      span.current.classList.add("hidden");
      span.current.classList.remove("visible");
      input.current.classList.remove("shake");
      dis(start());
      setNum(4);
      input.current.setAttribute("readonly", true);
      setTimeout(() => {
        dis(
          sendData({
            name: input.current.value,
          })
        );
        setValue("");
        input.current.removeAttribute("readonly");
      }, 4000);
      const interval = setInterval(
        () =>
          setNum((prev) => {
            if (prev === 2) clearInterval(interval);
            return prev - 1;
          }),
        1000
      );
    },
    [Value]
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        ref={input}
        value={Value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="hidden" ref={span}>
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

export default InputForm;
