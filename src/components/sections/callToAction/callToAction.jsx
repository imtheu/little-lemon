import React from "react";

import Button from "../../elements/button/button";

import style from "./callToAction.module.css";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className={style.callToAction}>
      <div className="container">
        <div className={style.content}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button onClick={() => navigate("/booking")}>Reserve a table</Button>
        </div>
        <img src="/cta-img.png" alt="" />
      </div>
    </section>
  );
};

export default CallToAction;
