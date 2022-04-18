import styles from "./cardcovid.module.css";

function CardCovid(props) {
  const { cardcovid } = props;

  return (
    <div className={styles.cardcovid}>
      <div className={styles.cardcovid__column}>
        <div className={styles.cardcovid__card}>
          <h3 className={styles.cardcovid__status}>{cardcovid.status}</h3>
          <h2 className={styles.cardcovid__total}>{cardcovid.total}</h2>
        </div>
      </div>
    </div>
  );
}

export default CardCovid;
