import React from "react";

import css from "./style.module.css";

import Logo from "../Logo";

import Menu from "../Menu"
import HamBurgerMenu from "../HamburgerMenu";

const Toolbar = (props) => (
  <header className={css.Toolbar}>
    <HamBurgerMenu toggleSideBar={props.toggleSideBar} />
    <Logo />
    <nav className={css.HideOnMobile}>
      <Menu />
    </nav>
  </header>
);

export default Toolbar;