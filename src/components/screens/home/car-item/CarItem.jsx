import styles from "../Home.module.css";

function carItem({ car }) {
  return (
    <div className={styles.item}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${car.image})`,
        }}
      ></div>
      <div className={styles.info}>
        <h2>{car.name}</h2>
        <p>
          {new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "USD",
          }).format(car.price)}
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
}

export default carItem;
