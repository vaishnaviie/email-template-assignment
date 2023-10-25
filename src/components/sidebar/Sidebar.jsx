import React from "react";
import CategoryFilter from "../categoryFilter/CategoryFilter";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <CategoryFilter />
    </div>
  );
};

export default Sidebar;
