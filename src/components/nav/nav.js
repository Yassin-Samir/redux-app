// @ts-nocheck
import React from "react";
import "./nav.css";
import { useSelector } from "react-redux";
export default function Nav() {
  const { name } = useSelector((s) => s.userData);
  return (
    <nav>
      <p>Yassin</p>
      {name ? <p>{name}</p> : null}
      <p>Nice</p>
    </nav>
  );
}
