import React from "react";
import nba from "../../assets/nba-logo.png";
import headerStyle from "./Header.module.scss";

const Header = () => {
  return (
    <div className={headerStyle.container}>
      <div>
        <img src={nba} alt="" />
      </div>

      <h1>NBA Legends</h1>
    </div>
  );
};

export default Header;
