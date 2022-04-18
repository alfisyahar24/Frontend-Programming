import styles from "./hero.module.css";
import image from "./undraw_medical_care_movn.png";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h4 className={styles.hero__subtitle}>
            Monitoring Perkembangan Covid
          </h4>
          <p className={styles.hero__description}>
            Coronavirus merupakan keluarga besar virus yang menyebabkan penyakit
            pada manusia dan hewan. Pada manusia biasanya menyebabkan penyakit
            infeksi saluran pernapasan, mulai flu biasa hingga penyakit yang
            serius seperti Middle East Respiratory Syndrome (MERS) dan Sindrom
            Pernafasan Akut Berat/ Severe Acute Respiratory Syndrome (SARS).
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className="hero__right">
          <img className={styles.hero__image} src={image} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
