import React from "react";
import s from "./UserMenu.module.css";
import User from "./User/User";
import MenuBtn from "./MenuBtn/MenuBtn";

const UserMenu = () => {
  return (
    <div>
      <div className={`${s.userMenu} d_flex a_items_center`}>
        <User />
        <MenuBtn />
      </div>
    </div>
  );
};

export default UserMenu;
