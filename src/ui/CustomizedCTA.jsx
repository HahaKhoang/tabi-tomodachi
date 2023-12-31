import { NavLink } from "react-router-dom";
import styles from "./CustomizedCTA.module.scss";

function CustomizedCTA() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.main}>So what are you waiting for?</p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br /> Aliquid earum aspernatur libero doloremque, dolorum,
          necessitatibus{" "}
        </p>
        <NavLink to="booking" className={styles.button}>
          Book now
        </NavLink>
      </div>
    </div>
  );
}

export default CustomizedCTA;
