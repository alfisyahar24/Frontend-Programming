import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>The Batman</h2>
          <h3 className={styles.hero__genre}>Genre: Action, Crime, Drama</h3>
          <p className={styles.hero__description}>
            When the Riddler, a sadistic serial killer, begins murdering key
            political figures in Gotham, Batman is forced to investigate the
            city's hidden corruption and question his family's involvement.
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src="https://sabilia.id/wp-content/uploads/2022/03/nonton-film-the-batman-2022-sub-indo.jpg"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
