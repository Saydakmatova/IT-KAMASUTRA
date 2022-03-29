import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = (props) => {
  return (
    <div className="header">
      <img
        src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_4.png"
        alt="..."
      />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
    </div>
  );
};

export default Header;
