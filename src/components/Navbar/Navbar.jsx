import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className={s.item}>
        <NavLink to={"/profile"} activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to={"/dialogs"}>Messagess</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to={"/users"}>Users</NavLink>
      </div>
      <div className={s.item}>
        <a href="#">News</a>
      </div>
      <div className={s.item}>
        <a href="#">Music</a>
      </div>
      <div>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
