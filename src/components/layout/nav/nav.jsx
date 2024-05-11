import React from "react";

import style from "./nav.module.css";

import { links } from "../../data/navigationLinks";

const Nav = () => (
  <nav className={style.nav}>
    <ul className={style.navList}>
      {links.map(({ href, label }) => (
        <li key={href}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
