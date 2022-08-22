// @ts-nocheck
import React from "react";
import "./nav.css";
import { useSelector } from "react-redux";
export default function Nav() {
  const { name } = useSelector((state) => state.user);
  return (
    <nav>
      <p>Yassin</p>
      <p>{name}</p>
      <p>Nice</p>
    </nav>
  );
}
