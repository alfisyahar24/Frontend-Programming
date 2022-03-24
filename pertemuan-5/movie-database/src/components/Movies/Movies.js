import styles from "./Movies.module.css";

function Movies() {
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://167.86.71.48/wp-content/uploads/2022/02/1644407927_iLUSFjdavIf0SrP7ldoQ1xomQVC.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>The Tinder Swindler</h3>
            <p className={styles.movie__date}>February 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://167.86.71.48/wp-content/uploads/2022/01/1643516853_z4IP8ZiKctB5U9brfKHYujYBUTD.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>All of Us Are Dead</h3>
            <p className={styles.movie__date}>January 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://167.86.71.48/wp-content/uploads/2022/03/1646656764_A8ZjxIJci0H6FYybeuPbPYSCf3A.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Beneath the Surface</h3>
            <p className={styles.movie__date}>March 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://167.86.71.48/wp-content/uploads/2022/02/1646054083_vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Peaky Blinders Season 6</h3>
            <p className={styles.movie__date}>February 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://167.86.71.48/wp-content/uploads/2022/02/1645933929_u6Pg9eTklhg6Aa7kXaxrfdE1Chi.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>The Desperate Hour</h3>
            <p className={styles.movie__date}>February 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://167.86.71.48/wp-content/uploads/2022/02/1645707612_akzXCpyVrUDXrcdk1y1QRshy01P.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Those Who Walk Away</h3>
            <p className={styles.movie__date}>February 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://167.86.71.48/wp-content/uploads/2022/02/1645252048_3cccEF9QZgV9bLWyupJO41HSrOV.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Fistful of Vengeance</h3>
            <p className={styles.movie__date}>February 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://167.86.71.48/wp-content/uploads/2022/02/1644068579_q7g6xb29Wfx8x8FiTqXFLywcoEz.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>The Policeman's Lineage</h3>
            <p className={styles.movie__date}>January 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://167.86.71.48/wp-content/uploads/2022/01/1642944837_nCRfr3eOlwH7wfxaz6cU1bhMR1W.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>The King's Daughter</h3>
            <p className={styles.movie__date}>January 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://167.86.71.48/wp-content/uploads/2022/01/1642147897_6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Hotel Transylvania 4</h3>
            <p className={styles.movie__date}>February 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://167.86.71.48/wp-content/uploads/2022/01/1641898566_jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Euphoria Season 2</h3>
            <p className={styles.movie__date}>January 2022</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movies;
