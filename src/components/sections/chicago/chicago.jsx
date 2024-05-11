import React from "react";

import style from "./chicago.module.css";

const Chicago = () => {
  return (
    <div className="container">
      <section className={style.chicago}>
        <div className={style.content}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
            <br />
            <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <img src="/chicago1.jpg" alt="" />
          <img src="/chicago2.jpg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Chicago;
