import React from "react";
import Nav from "../nav/nav";

import style from "./header.module.css";

const Header = () => (
  <header className={style.header}>
    <img src="/logo.jpg" alt="Little Lemon" width="200" />
    <Nav />
  </header>
);
export default Header;
