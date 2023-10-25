import React, { useEffect, useState } from "react";
import styles from "./ProductListing.module.scss";
import myData from "../../data/data";
import Card from "../card/Card";
import Filters from "../filters/Filters";
import { useData } from "../../context/ContextProvider";

const ProductListing = () => {
  const {
    data,
    setData,
    selectCategory,
    setSelectCategory,
    input,
    setInput,
    selectOption,
    setSelectOption,
  } = useData();

  const filteredData =
    selectCategory.length > 0
      ? data.filter((item) => selectCategory.includes(item.category))
      : data;

  const foundData = filteredData.filter(
    (item) =>
      item.category.toLowerCase().includes(input.toLowerCase()) ||
      item.items.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      ).length > 0
  );

  const getSortedData = (data, option) => {
    // console.log(data, option);
    if (option === "A-Z") {
      return [...data].sort((a, b) => (a.category > b.category ? 1 : -1));
    }
    if (option === "Z-A") {
      return [...data].sort((a, b) => (a.category > b.category ? -1 : 1));
    }
    return data;
  };
  const sortedData = getSortedData(foundData, selectOption);
  // console.log("sortedData", sortedData, selectOption);

  return (
    <div className={styles.Product_list_container}>
      <Filters />

      <div className={styles.Products_list}>
        {sortedData?.map((category, index) => (
          <Card category={category} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
