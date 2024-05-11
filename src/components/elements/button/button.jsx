import React from "react";

import style from "./button.module.css";

const Button = ({ children, attrs }) => (
  <button className={style.button} {...attrs}>
    {children}
  </button>
);

export default Button;
