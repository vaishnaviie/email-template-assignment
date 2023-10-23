import React from "react";
import styles from "./BodySection.module.css";
import Filters from "../filters/Filters";
import ProductListing from "../productListing/ProductListing";
import Sidebar from "../sidebar/Sidebar";

const BodySection = () => {
  return (
    <div className={styles.body_section_container}>
      <Sidebar />
      <ProductListing />
    </div>
  );
};

export default BodySection;
