import React from "react";
import Testimonal from "../../elements/testimonal/testimonal";

import style from "./customersSay.module.css";

const testimonals = [
  { name: "John", img: "john", rating: "5", text: "Very good!" },
  { name: "Will", img: "will", rating: "4", text: "Good!" },
  { name: "Patricia", img: "patricia", rating: "5", text: "Delicious!" },
  { name: "Dave", img: "dave", rating: "5", text: "Very good" },
];

const CustomersSay = () => (
  <section className={style.customersSay}>
    <div className="container">
      <h2 className={style.title}>Testimonals</h2>
      <div className={style.cards}>
        {testimonals.map((data) => (
          <Testimonal {...data} key={data.name} />
        ))}
      </div>
    </div>
  </section>
);

export default CustomersSay;
