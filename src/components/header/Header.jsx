import React from "react";
import "./Header.css";
import Logo from "./Logo/Logo";
import UserMenu from "./UserMenu/UserMenu";

const Header = () => {
  return (
    <div>
      <header className="d_flex a_items_center j_content_between">
        <Logo />
        <UserMenu />
      </header>
    </div>
  );
};

export default Header;
