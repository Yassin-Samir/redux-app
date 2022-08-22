// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>Contact us</li>
        <li>Prices</li>
      </ul>
    </nav>
  );
}
