import React from "react";
import styles from "./Card.module.scss";

const Card = ({ category }) => {
  return (
    <div className={styles.container}>
      <h1> {category?.category}</h1>

      <div className={styles.card_container}>
        {category.items?.map((item) => (
          <div className={styles.card_item}>
            <img src={item?.img} alt="img" />
            <h3>{item?.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
