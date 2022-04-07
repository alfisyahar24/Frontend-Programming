import styles from "./AddMovieForm.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

function AddMovieForm(props) {
  // Destructing props
  const { movies, setMovies } = props;

  // Membuat state title
  const [title, setTitle] = useState("");

  // Membuat state date
  const [date, setDate] = useState("");

  // Membuat state gambar
  const [gambar, setGambar] = useState("");

  // Membuat state genre
  const [genre, setGenre] = useState("");

  // Membuat state title dan date error/empty
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isGambarError, setIsGambarError] = useState(false);

  // Membuat fungsi handleTitle
  function handleTitle(e) {
    setTitle(e.target.value);
  }

  // Membuat fungsi handleDate
  function handleDate(e) {
    setDate(e.target.value);
  }

  // Membuat fungsi handleGambar
  function handleGambar(e) {
    setGambar(e.target.value);
  }

  // Membuat fungsi handleGenre
  function handleGenre(e) {
    setGenre(e.target.value);
  }

  // Handle form ketika disubmit
  function handleSubmit(e) {
    e.preventDefault(); // Mencegah perilaku default: refresh

    // Jika title kosong, maka set error title true
    if (title === "") {
      setIsGambarError(false);
      setIsDateError(false);
      setIsTitleError(true);
    }
    // Jika date kosong, maka set error date true
    else if (date === "") {
      setIsGambarError(false);
      setIsTitleError(false);
      setIsDateError(true);
    }
    // Jika gambar kosong, maka set error gambar true
    else if (gambar === "") {
      setIsTitleError(false);
      setIsDateError(false);
      setIsGambarError(true);
    }
    // Jika tidak kosong, tambah data
    else {
      // Siapkan movie yang ingin diinput
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: genre,
        poster: gambar,
      };

      setMovies([...movies, movie]);
      setIsTitleError(false);
      setIsDateError(false);
      setIsGambarError(false);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.AddMovieForm}>
        <div className="AddMovieForm__left">
          <img
            className={styles.AddMovieForm__image}
            src="https://media.istockphoto.com/vectors/flat-square-plus-sign-green-icon-button-positive-symbol-vector-id692769254?k=20&m=692769254&s=170667a&w=0&h=dmgx4rfzdxuUIbhKxvvuyPZU1t46_BQGcIFmM0z6jK4="
            alt="placeholder"
          />
        </div>
        <div className="AddMovieForm__right">
          <h2 className={styles.AddMovieForm__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label className={styles.AddMovieForm__label}>Title</label>
              <input
                onChange={handleTitle}
                id="title"
                name="title"
                className={styles.AddMovieForm__input}
                type="text"
                value={title}
              ></input>
              {/* Jika error title true: muncul error
            Jika tidak, munculkan string kosong */}
              {/* Untuk 2 kondisi  */}
              {/* {isTitleError ? <p>Title Wajib Diisi</p> : ""} */}
              {/* Untuk 1 kondisi */}
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div>
              <label className={styles.AddMovieForm__label}>Year</label>
              <input
                onChange={handleDate}
                id="date"
                name="date"
                className={styles.AddMovieForm__input}
                type="text"
                value={date}
              ></input>
              {/* Jika error date true: muncul error
            Jika tidak, munculkan string kosong */}
              {/* Untuk 2 kondisi  */}
              {/* {isDateError ? <Alert>Date Wajib Diisi</Alert> : ""} */}
              {/* Untuk 1 kondisi  */}
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div>
              <label className={styles.AddMovieForm__label}>Input Gambar</label>
              <input
                onChange={handleGambar}
                id="gambar"
                name="gambar"
                className={styles.AddMovieForm__select}
                type="text"
                value={gambar}
              ></input>
              {/* Jika error input gambar true: muncul error
            Jika tidak, munculkan string kosong */}
              {/* Untuk 2 kondisi  */}
              {/* {isGambarError ? <Alert>Link Gambar Wajib Diisi</Alert> : ""} */}
              {/* Untuk 1 kondisi  */}
              {isGambarError && <Alert>Link Gambar Wajib Diisi</Alert>}
            </div>
            <div>
              <label className={styles.AddMovieForm__label}>Genre</label>
              <select
                value={genre}
                onChange={handleGenre}
                name="genre"
                id="genre"
                className={styles.AddMovieForm__select}
              >
                <option className={styles.AddMovieForm__option} value="">
                  Select Genre
                </option>
                <option value="Action">Action</option>
                <option value="Crime">Crime</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Thriller">Thriller</option>
              </select>
            </div>
            <div>
              <button className={styles.AddMovieForm__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
