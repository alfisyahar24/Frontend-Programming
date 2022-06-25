import data from "../../utils/constants/indonesia";
import CardCovid from "../CardCovid";
import StyledGlobalSection from "./globalsection.styled";

function GlobalSection() {
  const globalsection = data.indonesia;
  return (
    <StyledGlobalSection>
      <section>
        <h2>Indonesia</h2>
        <h4>Data Covid Berdasarkan Indonesia</h4>
        <div className="cardcovid__container">
          {globalsection.map(function (cardcovid, key) {
            return <CardCovid cardcovid={cardcovid} key={key} />;
          })}
        </div>
      </section>
    </StyledGlobalSection>
  );
}

export default GlobalSection;
