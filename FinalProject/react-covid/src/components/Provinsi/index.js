import styles from "./provinsi.module.css";
import data from "../../utils/constants/provinces";

function Provinsi() {
  const provinsi = data.provinces;
  let nomor = 0;
  return (
    <div className={styles.container}>
      <section className={styles.provinsi}>
        <h2 className={styles.provinsi__title}>Provinsi</h2>
        <h4 className={styles.provinsi__subtitle}>
          Data Covid Berdasarkan Provinsi
        </h4>
        <div className={styles.provinsi__container}>
          <table className={styles.provinsi__table}>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
              {provinsi.map((value, key) => {
                nomor += 1;
                return (
                  <tr key={key}>
                    <td>{nomor}</td>
                    <td>{value.kota}</td>
                    <td>{value.kasus}</td>
                    <td>{value.sembuh}</td>
                    <td>{value.dirawat}</td>
                    <td>{value.meninggal}</td>
                  </tr>
                );
              })}
            </thead>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Provinsi;
