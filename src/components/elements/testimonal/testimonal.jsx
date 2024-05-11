import React from "react";

import style from "./testimonal.module.css";

const Testimonal = ({ name, img, text, rating }) => (
  <article className={style.testimonal}>
    <h1>{rating} stars</h1>
    <div>
      <img src={`/${img}.jpeg`} alt="" />
      <h2>{name}</h2>
    </div>
    <p>{text}</p>
  </article>
);

export default Testimonal;
