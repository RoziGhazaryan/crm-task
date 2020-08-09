import React from "react";
import s from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div className={s.logo}>
        <Link to="/logo">
          <img src={require("../../../assets/img/logo.png")} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
