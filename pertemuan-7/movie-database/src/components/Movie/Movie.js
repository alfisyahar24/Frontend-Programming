import styles from "./Movie.module.css";

function Movie(props) {
  // Destructing object props
  const { movie } = props;

  return (
    <div className={styles.movie}>
      <img className={styles.movie__image} src={movie.poster} alt="" />
      <h3 className={styles.movie__title}>{movie.title}</h3>
      <h1 className={styles.movie__genre}>{movie.type}</h1>
      <p className={styles.movie__date}>{movie.year}</p>
    </div>
  );
}

export default Movie;
