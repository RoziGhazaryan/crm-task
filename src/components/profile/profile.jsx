import React from "react";
import s from "./profile.module.css";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div>
        <h1 className={s.title}>This is PROFILE page</h1>
        <div className="menu">
          <ul>
            <li>
              <NavLink exact to="/dialogs">
                Dialogs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
