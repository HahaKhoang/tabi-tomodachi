import styles from "./Banner2.module.scss";

function Banner2({ h1, text1, text2, svg, bgColor, bgImg }) {
  return (
    <div
      className={styles.container}
      style={
        bgImg
          ? {
              backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.511),
              rgba(229, 229, 229, 0.057),
              rgba(0, 0, 0, 0.507)), url(${bgImg})`,
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }
          : { backgroundColor: `${bgColor}` }
      }
    >
      <div className={styles["text-container"]}>
        <h1 className={styles.header}>{h1}</h1>
        <div className={styles["subtext-container"]}>
          <p className={styles.text}>{text1}</p>
          <p className={styles.text}>{text2}</p>
        </div>
      </div>
      <div className={styles["image-container"]}>
        {!bgImg && <img src={svg} className={styles.picture} />}
      </div>
    </div>
  );
}

export default Banner2;

// style={{ backgroundColor: `${bgColor}` }}
