import Hero from "../components/Hero";
import GlobalSection2 from "../components/GlobalSection2";
// import Provinsi from "../components/Provinsi";
// import FormCovid from "../components/FormCovid";
import { useState } from "react";
import data from "../utils/constants/global";
import GlobalSummary from "../components/GlobalSummary";
// import Provinces from "../utils/constants/provinces";

function Home() {
  const [globalsection2, setGlobalSection2] = useState(data);
  // const [provinsi, setProvinsi] = useState(Provinces.provinces);

  return (
    <>
      <Hero />
      <GlobalSection2
        globalsection2={globalsection2}
        setGlobalSection2={setGlobalSection2}
      />
      <GlobalSummary />
      {/* <Provinsi />
      <FormCovid provinsi={provinsi} setProvinsi={setProvinsi} /> */}
    </>
  );
}

export default Home;
