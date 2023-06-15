// @ts-nocheck
import React from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const selector = createSelector(
  (state) => state.userData,
  (userData) => userData.name
);
export default function Nav() {
  const name = useSelector(selector);
  return (
    <nav>
      <p>Yassin</p>
      {name ? <p>{name}</p> : null}
      <p>Nice</p>
    </nav>
  );
}
