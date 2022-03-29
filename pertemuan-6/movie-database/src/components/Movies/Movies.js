import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// import data movies
import data from "../Utils/Constants/Data";
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {
  // Membuat variable movies
  // const movies = data;

  // Membuat variable state
  const [movies, setMovies] = useState(data);

  // Membuat fungsi tambah Film
  // Dijalankan ketika tombol diklik
  function tambahFilm() {
    const movie = {
      id: nanoid(),
      title: "Spiral Jigsaw",
      year: "2021",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    // Menambahkan movie ke state movies
    // Spread operator: copy dan merge array
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {
            // Looping data movies: map
            // Render component movie
            // Kirim props movie
            movies.map(function (movie) {
              return <Movie key={movie.id} movie={movie} />;
            })
          }
        </div>
        {/* Menambahkan Event onClick */}
        <button onClick={tambahFilm}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
