import React from "react";

import style from "./card.module.css";

const Card = ({ img, title, price, description }) => (
  <article className={style.card}>
    <img src={`/${img}.jpg`} alt="" />
    <div className={style.content}>
      <div className={style.heading}>
        <h1>{title}</h1>
        <span>$ {price}</span>
      </div>

      <p>{description}</p>

      <button>Order A Delivery</button>
    </div>
  </article>
);

export default Card;
