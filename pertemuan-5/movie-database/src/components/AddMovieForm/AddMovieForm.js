import styles from "./AddMovieForm.module.css";

// function AddMovieForm() {
//   return (
//     <div className={styles.container}>
//       <section className={styles.AddMovieForm}>
//         <div className={styles.AddMovieForm__left}>
//           <h2 className={styles.AddMovieForm__title}>Spiderman</h2>
//           <h3 className={styles.AddMovieForm__genre}>
//             Genre: Thriller, Drama, Romance
//           </h3>
//           <p className={styles.AddMovieForm__description}>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
//             cum accusamus quisquam earum velit ea nobis maiores exercitationem
//             nam temporibus.
//           </p>
//           <button className={styles.AddMovieForm__button}>Watch</button>
//         </div>
//         <div className="AddMovieForm__right">
//           <img
//             className={styles.AddMovieForm__image}
//             src="https://picsum.photos/536/354"
//             alt="placeholder"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

function AddMovieForm() {
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
          <h2 className={styles.AddMovieForm__title}>Add Movie</h2>

          <label className={styles.AddMovieForm__label}>Title</label>
          <input className={styles.AddMovieForm__input} disabled></input>
          <label className={styles.AddMovieForm__label}>Year</label>
          <input className={styles.AddMovieForm__input} disabled></input>
          <button className={styles.AddMovieForm__button}>Submit</button>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
