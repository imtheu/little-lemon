import React from "react";

import Button from "../../elements/button/button";

import style from "./callToAction.module.css";

const CallToAction = () => (
  <section className={style.callToAction}>
    <div className="container">
      <div className={style.content}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button>Reserve a table</Button>
      </div>
      <img src="/cta-img.png" alt="" />
    </div>
  </section>
);

export default CallToAction;
