import React from "react";
import styles from "./Card.module.scss";

const Card = ({ category }) => {
  return (
    <div className={styles.container}>
      <h1> {category?.category}</h1>
      <div className={styles.card_container}>
        {category.items?.map((item) => (
          <div className={styles.card_item}>
            <img className={styles.content_img} src={item?.img} alt="img" />
            <div className={styles.card_heading_wrapper}>
              <h3 className={styles.card_heading}>{item?.title}</h3>
            </div>
            {/* {item.isPremium && (
              <div className={styles.svg_wrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_378_134)">
                    <path
                      d="M12.6666 6L16.6666 12L21.6666 8L19.6666 18H5.66663L3.66663 8L8.66663 12L12.6666 6Z"
                      stroke="#F1C21B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_378_134">
                      <rect x="0.666626" width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            )} */}
            <div className={styles.content_details}>
              <button className={styles.btn_use_this}>use this</button>
            </div>
            <div className={styles.content_overlay}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
