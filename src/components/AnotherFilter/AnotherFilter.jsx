import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import { useData } from "../../context/ContextProvider";

const CategoryFilter = () => {
  const { selectCategory, setSelectCategory } = useData();
  const handeChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectCategory([...selectCategory, value]);
    } else {
      setSelectCategory(
        selectCategory.filter((filteredValue) => filteredValue !== value)
      );
    }
  };

  // console.log(selectCategory);

  return (
    <div className={styles.sidebar}>
      <span>Categories</span>
      {["Announcement", "Educate & Inform ", "Invitation", "Ocassions"].map(
        (category) => (
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              value={category}
              id={category}
              checked={selectCategory.includes(category)}
              onChange={handeChange}
            />
            <label htmlFor={category} key={category}>
              {category}
            </label>
          </div>
        )
      )}
    </div>
  );
};

export default CategoryFilter;
