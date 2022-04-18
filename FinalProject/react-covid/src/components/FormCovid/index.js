import styles from "./formcovid.module.css";
import { useState } from "react";
import image from "./undraw_conceptual_idea_xw7k.png";
import data from "../../utils/constants/provinces";
import Alert from "../Alert";

function FormCovid() {
  const provinces = data.provinces;

  const listStatus = ["Positif", "Sembuh", "Dirawat", "Meninggal"];

  const [kota, setKota] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");

  const [isJumlahError, setIsJumlahError] = useState(false);

  function handleKota(e) {
    setKota(e.target.value);
  }

  function handleStatus(e) {
    setStatus(e.target.value);
  }

  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // Mencegah perilaku default: refresh

    // Jika title kosong, maka set error title true
    if (jumlah === "") {
      setIsJumlahError(true);
    }
    // Jika tidak kosong, tambah data
    else {
      // Siapkan movie yang ingin diinput
      // const movie = {
      //   id: nanoid(),
      //   title: title,
      //   year: date,
      //   type: genre,
      //   poster: gambar,
      // };

      // setMovies([...movies, movie]);
      setIsJumlahError(false);
    }
    console.log(kota);
    console.log(status);
    console.log(jumlah);
  }

  return (
    <div className={styles.container}>
      <section className={styles.formcovid}>
        <div className={styles.formcovid}>
          <img className={styles.formcovid__image} src={image} alt="" />
        </div>
        <div className={styles.formcovid__right}>
          <h2 className={styles.formcovid__title}>Form Covid</h2>
          <form onSubmit={handleSubmit}>
            {/* ----- Provinsi -----*/}
            <div>
              <label className={styles.formcovid__label}>Provinsi</label>
              <select
                value={kota}
                onChange={handleKota}
                name="kota"
                id="kota"
                className={styles.formcovid__select}
              >
                <option
                  className={styles.formcovid__option}
                  value="Select Provinsi"
                >
                  Select Provinsi
                </option>
                {provinces.map((province, key) => {
                  return (
                    <option
                      className={styles.formcovid__option}
                      value={province.kota}
                      key={key}
                    >
                      {province.kota}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* ----- End Provinsi -----*/}

            {/* ----- Status -----*/}
            <div>
              <label className={styles.formcovid__label}>Status</label>
              <select
                value={status}
                onChange={handleStatus}
                name="status"
                id="status"
                className={styles.formcovid__select}
              >
                <option
                  className={styles.formcovid__option}
                  value="Select Status"
                >
                  Select Status
                </option>
                {listStatus.map((statusCovid, key) => {
                  return (
                    <option
                      className={styles.formcovid__option}
                      value={statusCovid}
                      key={key}
                    >
                      {statusCovid}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* ----- End Status -----*/}

            {/* ----- Jumlah -----*/}
            <div>
              <label className={styles.formcovid__label}>Jumlah</label>
              <input
                value={jumlah}
                onChange={handleJumlah}
                id="jumlah"
                name="jumlah"
                type="number"
                className={styles.formcovid__input}
              ></input>
              {isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
            </div>
            {/* ----- End Jumlah -----*/}

            {/* ----- Button -----*/}
            <div>
              <button className={styles.formcovid__button}>Submit</button>
            </div>
            {/* ----- End Button -----*/}
          </form>
        </div>
      </section>
    </div>
  );
}

export default FormCovid;
