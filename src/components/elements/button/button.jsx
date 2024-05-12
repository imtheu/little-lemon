import React from "react";

import style from "./button.module.css";

const Button = ({ children, disabled, onClick, attrs }) => (
  <button
    className={style.button}
    onClick={onClick}
    disabled={disabled}
    {...attrs}
  >
    {children}
  </button>
);

export default Button;
