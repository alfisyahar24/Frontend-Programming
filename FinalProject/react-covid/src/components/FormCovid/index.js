import { useState } from "react";
import image from "./undraw_conceptual_idea_xw7k.png";
import data from "../../utils/constants/provinces";
import Alert from "../Alert";
import Button from "../Ui/Button";
import StyledForm from "./formcovid.styled";

function FormCovid(props) {
  const provinces = data.provinces;

  const listStatus = ["Positif", "Sembuh", "Dirawat", "Meninggal"];

  const { setProvinsi } = props;

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

    if (jumlah === "") {
      setIsJumlahError(true);
    } else {
      const index = provinces.findIndex((item) => item.kota === kota);
      const foundKota = provinces.find((item) => item.kota === kota);

      let currentValueKasus = parseInt(foundKota.kasus);
      let currentValueSembuh = parseInt(foundKota.sembuh);
      let currentValueDirawat = parseInt(foundKota.dirawat);
      let currentValueMeninggal = parseInt(foundKota.meninggal);

      let valueNowKasus = status === "Positif" ? parseInt(jumlah) : parseInt(0);

      let valueNowSembuh = status === "Sembuh" ? parseInt(jumlah) : parseInt(0);

      let valueNowDirawat =
        status === "Dirawat" ? parseInt(jumlah) : parseInt(0);

      let valueNowMeninggal =
        status === "Meninggal" ? parseInt(jumlah) : parseInt(0);

      const propinsi = {
        kota: kota,
        kasus: currentValueKasus + valueNowKasus,
        sembuh: currentValueSembuh + valueNowSembuh,
        dirawat: currentValueDirawat + valueNowDirawat,
        meninggal: currentValueMeninggal + valueNowMeninggal,
      };

      provinces[index] = propinsi;

      setProvinsi([...provinces]);

      setIsJumlahError(false);
    }
  }

  return (
    <StyledForm>
      <section>
        <StyledForm>
          <img src={image} alt="" />
        </StyledForm>
        <div className="formcovid__right">
          <h2>Form Covid</h2>
          <form onSubmit={handleSubmit}>
            {/* ----- Provinsi -----*/}
            <div>
              <label>Provinsi</label>
              <select value={kota} onChange={handleKota} name="kota" id="kota">
                <option value="Select Provinsi">Select Provinsi</option>
                {provinces.map((province, key) => {
                  return (
                    <option value={province.kota} key={key}>
                      {province.kota}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* ----- End Provinsi -----*/}

            {/* ----- Status -----*/}
            <div>
              <label>Status</label>
              <select
                value={status}
                onChange={handleStatus}
                name="status"
                id="status"
              >
                <option value="Select Status">Select Status</option>
                {listStatus.map((statusCovid, key) => {
                  return (
                    <option value={statusCovid} key={key}>
                      {statusCovid}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* ----- End Status -----*/}

            {/* ----- Jumlah -----*/}
            <div>
              <label>Jumlah</label>
              <input
                value={jumlah}
                onChange={handleJumlah}
                id="jumlah"
                name="jumlah"
                type="number"
              ></input>
              {isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
            </div>
            {/* ----- End Jumlah -----*/}

            {/* ----- Button -----*/}
            <div>
              <Button full>Submit</Button>
            </div>
            {/* ----- End Button -----*/}
          </form>
        </div>
      </section>
    </StyledForm>
  );
}

export default FormCovid;
