import React from "react";
import s from "./MenuBtn.module.css";
import { Link } from "react-router-dom";

const MenuBtn = () => {
  return (
    <div>
      <Link to="/menu">
        <div className={s.menuBtn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Link>
    </div>
  );
};

export default MenuBtn;
