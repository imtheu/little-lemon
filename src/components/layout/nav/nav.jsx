import React from "react";

import style from "./nav.module.css";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "Reservations",
    href: "/reservations",
  },
  {
    label: "Order Online",
    href: "/order-online",
  },
  {
    label: "Login",
    href: "/login",
  },
];

const Nav = () => (
  <nav className={style.nav}>
    <ul className={style.navList}>
      {links.map(({ href, label }) => (
        <li>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
