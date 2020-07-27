import React from "react";
import s from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div>
      <div>
        <h1 className={s.title}>This is DIALOGS page</h1>
        <ul>
          <li>
            <NavLink exact to="/profile">
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;
