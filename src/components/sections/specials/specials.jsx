import React from "react";
import Button from "../../elements/button/button";

import style from "./specials.module.css";
import Card from "../../elements/card/card";

const cards = [
  {
    img: "greek-salad",
    title: "Greek Salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
  },
  {
    img: "bruchetta",
    title: "Bruchetta",
    price: "5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
  },
  {
    img: "lemon-dessert",
    title: "Lemon Dessert",
    price: "5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Specials = () => (
  <section className={style.specials}>
    <div className="container">
      <div className={style.sectionHeading}>
        <h2 className={style.sectionTitle}>Specials</h2>
        <Button>Online Menu</Button>
      </div>
      <ul className={style.cards}>
        {cards.map((data) => (
          <li key={data.img}>
            <Card {...data} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);
export default Specials;
