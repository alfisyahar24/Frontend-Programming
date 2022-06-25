import Hero from "../../components/Hero";
// import GlobalSection from "../../components/GlobalSection";
import Provinsi from "../../components/Provinsi";
import FormCovid from "../../components/FormCovid";
import Provinces from "../../utils/constants/provinces";
import { useState } from "react";

function Province() {
  const [provinsi, setProvinsi] = useState(Provinces.provinces);

  return (
    <>
      <Hero />
      <Provinsi />
      <FormCovid provinsi={provinsi} setProvinsi={setProvinsi} />
    </>
  );
}

export default Province;
