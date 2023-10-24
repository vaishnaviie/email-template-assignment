import React from "react";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.hero_section_container}>
      <span>Marketplace</span>
      <div>
        <h1 className={styles.heading1}>Email Templates</h1>
        <h1 className={styles.heading2}>
          by the community, for the community.
        </h1>
      </div>
      <p className={styles.text_info}>
        100s of free templates to help you craft the perfect marketing journey.
      </p>
    </div>
  );
};

export default HeroSection;
