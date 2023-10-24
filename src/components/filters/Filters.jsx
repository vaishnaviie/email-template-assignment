import React, { useState } from "react";
import styles from "./Filter.module.scss";

const Filters = () => {
  const [selectOption, setSelectOption] = useState("recent");

  const Optn = [
    { label: "Recent", value: "recent" },
    { label: "New", value: "new" },
    { label: "Old", value: "old" },
  ];
  return (
    <div className={styles.filters_container}>
      <input type="search" placeholder="Search email templates" />
      <div>
        <select name={selectOption} onChange={(e) => e.target.value}>
          {Optn.map(({ label, value }) => (
            <>
              <option value={value}>
                {" "}
                <span className={styles.label}>{label}</span>
              </option>
            </>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
