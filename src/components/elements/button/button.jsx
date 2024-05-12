import React from "react";

import style from "./button.module.css";

const Button = ({ children, disabled, attrs }) => (
  <button className={style.button} disabled={disabled} {...attrs}>
    {children}
  </button>
);

export default Button;
