import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GlobalSection from "../components/GlobalSection";
import Provinsi from "../components/Provinsi";
import FormCovid from "../components/FormCovid";
import Footer from "../components/Footer";
import { useState } from "react";
import data from "../utils/constants/indonesia";
// import data from "../utils/data";
// import Provinces from "../utils/constants/provinces";

function Main() {
  const [globalsection, setGlobalSection] = useState(data);

  return (
    <main>
      <Hero />
      <GlobalSection
        globalsection={globalsection}
        setGlobalSection={setGlobalSection}
      />
      <Provinsi />
      <FormCovid
        globalsection={globalsection}
        setGlobalSection={setGlobalSection}
      />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
