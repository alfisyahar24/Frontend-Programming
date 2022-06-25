import data from "../../utils/constants/provinces";
import StyledProvinsi from "./provinsi.styled";

function Provinsi() {
  const provinsi = data.provinces;
  let nomor = 0;
  return (
    <StyledProvinsi>
      <section>
        <h2>Provinsi</h2>
        <h4>Data Covid Provinsi</h4>
        <div className="provinsi__container">
          <table>
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
    </StyledProvinsi>
  );
}

export default Provinsi;
