import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="navbar">
      <Link className="link" to="/TodoAppTypescript/">
        <span>TODOS</span>
      </Link>

      <Link className="link" to="/TodoAppTypescript/add">
        <span>Add Todo</span>
      </Link>
    </div>
  );
}
