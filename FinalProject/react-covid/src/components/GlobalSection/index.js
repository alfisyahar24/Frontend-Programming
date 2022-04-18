import styles from "./globalsection.module.css";
import data from "../../utils/constants/indonesia";
import CardCovid from "../CardCovid";

function GlobalSection() {
  const globalsection = data.indonesia;
  return (
    <div className={styles.container}>
      <section className={styles.globalsection}>
        <h2 className={styles.globalsection__title}>Indonesia</h2>
        <h4 className={styles.globalsection__subtitle}>
          Data Covid Berdasarkan Global
        </h4>
        <div className={styles.cardcovid__container}>
          {globalsection.map(function (cardcovid, key) {
            return <CardCovid cardcovid={cardcovid} key={key} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default GlobalSection;
