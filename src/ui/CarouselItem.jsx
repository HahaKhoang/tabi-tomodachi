import styles from "./CarouselItem.module.scss";

function CarouselItem({ name, tour, image }) {
  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <img src={image} className={styles.picture} />
      </div>
      <div className={styles["right-container"]}>
        <h3 className={styles.tour}>{tour}</h3>
        <p className={styles.review}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet error
          fugiat aperiam temporibus non nobis vero earum! Sint beatae facilis
          perferendis vel voluptas optio aut molestias nostrum dolor, accusamus
          itaque.
        </p>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
}

export default CarouselItem;
