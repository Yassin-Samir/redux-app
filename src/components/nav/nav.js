// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";
export default function Nav() {
  const { name } = useSelector((state) => state.userData);
  return (
    <nav>
      <p>Yassin</p>
      {name ? <p>{name}</p> : null}
      <p>Nice</p>
    </nav>
  );
}
