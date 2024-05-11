import React from "react";

import style from "./footer.module.css";
import { links } from "../../data/navigationLinks";

const socialMedia = [
  {
    label: "Facebook",
    href: "facebook.com",
  },
  {
    label: "Instagram",
    href: "instagram.com",
  },
];

const Footer = () => (
  <footer className={style.footer}>
    <div className="container">
      <div>
        <img src="/footer-logo.png" alt="" />
      </div>
      <div>
        <span>Navigation</span>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span>Contact</span>
        <p>St. Address</p>
        <p>+0 (00) 0000-0000</p>
        <p>contact@littlelemon.com</p>
      </div>
      <div>
        <span>Social Media Links</span>
        <ul>
          {socialMedia.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
