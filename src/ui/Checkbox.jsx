import { useState } from "react";
import styles from "./Checkbox.module.scss";

function Checkbox({ label }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <label className={styles.container}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          className={isChecked ? `${styles.checked} ` : ""}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Checkbox;
