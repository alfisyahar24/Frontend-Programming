import Hero from "../../components/Hero";
import GlobalSection from "../../components/GlobalSection";
import { useState } from "react";
import data from "../../utils/constants/indonesia";
import IndonesiaSummary from "../../components/IndonesiaSummary";

function Indonesia() {
  const [globalsection, setGlobalSection] = useState(data);
  return (
    <>
      <Hero />
      <GlobalSection
        globalsection={globalsection}
        setGlobalSection={setGlobalSection}
      />
      <IndonesiaSummary />
    </>
  );
}

export default Indonesia;
