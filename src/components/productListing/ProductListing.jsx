import React, { useEffect, useState } from "react";
import styles from "./ProductListing.module.scss";
import myData from "../../data/data";
import Card from "../card/Card";
import Filters from "../filters/Filters";

const ProductListing = () => {
  const [data, setData] = useState(myData.emailData);

  console.log(data);

  // const getData = async () => {
  //   const res = await fetch("../../data/data.json");
  //   const res2 = await res.json();
  //   console.log(res2);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className={styles.Product_list_container}>
      <Filters />
      <div className={styles.Products_list}>
        {data?.map((category, index) => (
          <Card category={category} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
