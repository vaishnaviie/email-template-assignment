import React, { useState } from "react";
import styles from "./Filter.module.scss";
import { useData } from "../../context/ContextProvider";
import CategoryFilter from "../categoryFilter/CategoryFilter";

const Filters = () => {
  const { input, setInput, selectOption, setSelectOption } = useData();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);

  const sortOptions = ["A-Z", "Z-A"];

  return (
    <div className={styles.filters_container}>
      <div className={styles.searchbar}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.9766 14.4716H15.1866L14.9066 14.2016C16.1066 12.8016 16.7266 10.8916 16.3866 8.86157C15.9166 6.08157 13.5966 3.86157 10.7966 3.52157C6.56658 3.00157 3.00658 6.56157 3.52658 10.7916C3.86658 13.5916 6.08658 15.9116 8.86658 16.3816C10.8966 16.7216 12.8066 16.1016 14.2066 14.9016L14.4766 15.1816V15.9716L18.7266 20.2216C19.1366 20.6316 19.8066 20.6316 20.2166 20.2216C20.6266 19.8116 20.6266 19.1416 20.2166 18.7316L15.9766 14.4716ZM9.97658 14.4716C7.48658 14.4716 5.47658 12.4616 5.47658 9.97157C5.47658 7.48157 7.48658 5.47157 9.97658 5.47157C12.4666 5.47157 14.4766 7.48157 14.4766 9.97157C14.4766 12.4616 12.4666 14.4716 9.97658 14.4716Z"
              fill="#8D8D8D"
            />
          </svg>
        </span>
        <input
          type="search"
          value={input}
          placeholder="  Search email templates"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className={styles.sort_dropdown}>
        <button
          className={styles.btn_sort}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <svg
            className={styles.svg1}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M3.33333 15H6.66667C7.125 15 7.5 14.625 7.5 14.1667C7.5 13.7083 7.125 13.3333 6.66667 13.3333H3.33333C2.875 13.3333 2.5 13.7083 2.5 14.1667C2.5 14.625 2.875 15 3.33333 15ZM2.5 5.83333C2.5 6.29167 2.875 6.66667 3.33333 6.66667H16.6667C17.125 6.66667 17.5 6.29167 17.5 5.83333C17.5 5.375 17.125 5 16.6667 5H3.33333C2.875 5 2.5 5.375 2.5 5.83333ZM3.33333 10.8333H11.6667C12.125 10.8333 12.5 10.4583 12.5 10C12.5 9.54167 12.125 9.16667 11.6667 9.16667H3.33333C2.875 9.16667 2.5 9.54167 2.5 10C2.5 10.4583 2.875 10.8333 3.33333 10.8333Z"
              fill="#161616"
            />
          </svg>

          <div>
            Sort by: <span>Recent</span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.25524 9.51143L9.41358 11.6698C9.73858 11.9948 10.2636 11.9948 10.5886 11.6698L12.7469 9.51143C13.2719 8.98643 12.8969 8.08643 12.1552 8.08643H7.83858C7.09691 8.08643 6.73024 8.98643 7.25524 9.51143Z"
              fill="#161616"
            />
          </svg>
        </button>

        {showDropdown && (
          <div className={styles.dropdown}>
            <span className={styles.options_wrapper}>
              {sortOptions.map((option) => (
                <button onClick={() => setSelectOption(option)}>
                  {option}
                </button>
              ))}
            </span>
          </div>
        )}
      </div>

      <div className={styles.category_filter_container}>
        <button
          className={styles.btn_sort}
          onClick={() => setShowCategoryFilter(!showCategoryFilter)}
        >
          <svg
            className={styles.svg1}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M3.33333 15H6.66667C7.125 15 7.5 14.625 7.5 14.1667C7.5 13.7083 7.125 13.3333 6.66667 13.3333H3.33333C2.875 13.3333 2.5 13.7083 2.5 14.1667C2.5 14.625 2.875 15 3.33333 15ZM2.5 5.83333C2.5 6.29167 2.875 6.66667 3.33333 6.66667H16.6667C17.125 6.66667 17.5 6.29167 17.5 5.83333C17.5 5.375 17.125 5 16.6667 5H3.33333C2.875 5 2.5 5.375 2.5 5.83333ZM3.33333 10.8333H11.6667C12.125 10.8333 12.5 10.4583 12.5 10C12.5 9.54167 12.125 9.16667 11.6667 9.16667H3.33333C2.875 9.16667 2.5 9.54167 2.5 10C2.5 10.4583 2.875 10.8333 3.33333 10.8333Z"
              fill="#161616"
            />
          </svg>

          <div>
            Filters: <span>2 applied</span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.25524 9.51143L9.41358 11.6698C9.73858 11.9948 10.2636 11.9948 10.5886 11.6698L12.7469 9.51143C13.2719 8.98643 12.8969 8.08643 12.1552 8.08643H7.83858C7.09691 8.08643 6.73024 8.98643 7.25524 9.51143Z"
              fill="#161616"
            />
          </svg>
        </button>

        {showCategoryFilter && (
          <div className={styles.category_filter}>
            <CategoryFilter />
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
