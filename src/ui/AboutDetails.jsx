import kathy from "../../public/img/kathy.jpg";
import styles from "./AboutDetails.module.scss";

function AboutDetails() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["picture-container"]}>
          <img src={kathy} className={styles.pic} />
        </div>
        <div className={styles["description-container"]}>
          <div className={styles.kanji}>
            <p className={styles.japanese}>旅</p>
            <p className={styles.english}>Tabi</p>
          </div>
          <div className={styles.kanji}>
            <p className={styles.japanese}>友達</p>
            <p className={styles.english}>Tomodachi</p>
          </div>
          <p>
            <span className={styles.travel}>Tabi Tomodachi</span> is the
            Japanese word for a friend you make while traveling.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, iste mollitia accusamus itaque laborum nobis distinctio
            consequatur, suscipit at maiores, numquam laboriosam qui. At dolores
            id, incidunt ad voluptate hic?
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            dolore iure eius nihil pariatur dolor aliquam, accusantium odit
            laborum magni fugit at enim modi quas voluptas atque sequi
            recusandae quod!
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutDetails;
