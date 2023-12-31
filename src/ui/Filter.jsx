import { useSearchParams } from "react-router-dom";
import styles from "./Filter.module.scss";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.container}>
      <p className={styles.filter}>Filter by:</p>
      {options.map((option) => (
        <button
          className={
            option.value === currentFilter
              ? `${styles.button} ${styles.active}`
              : `${styles.button}`
          }
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
