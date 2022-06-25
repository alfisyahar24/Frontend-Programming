import image from "./undraw_medical_care_movn.png";
import { useEffect, useState } from "react";
import Button from "../Ui/Button";
import StyledHero from "./hero.styled";

function Hero() {
  const [covid, setCovid] = useState("");
  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>Covid ID</h2>
          <h4>Monitoring Perkembangan Covid</h4>
          <p>
            Coronavirus merupakan keluarga besar virus yang menyebabkan penyakit
            pada manusia dan hewan. Pada manusia biasanya menyebabkan penyakit
            infeksi saluran pernapasan, mulai flu biasa hingga penyakit yang
            serius seperti Middle East Respiratory Syndrome (MERS) dan Sindrom
            Pernafasan Akut Berat/ Severe Acute Respiratory Syndrome (SARS).
          </p>
          <Button>Vaccine</Button>
        </div>
        <div className="hero__right">
          <img src={image} alt="" />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
