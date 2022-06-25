import data from "../../utils/constants/global";
import CardCovid from "../CardCovid";
import StyledGlobalSection2 from "./globalsection2.styled";

function GlobalSection2() {
  const globalsection2 = data.global;
  return (
    <StyledGlobalSection2>
      <section>
        <h2>Global</h2>
        <h4>Data Covid Berdasarkan Global</h4>
        <div className="cardcovid__container">
          {globalsection2.map(function (cardcovid, key) {
            return <CardCovid cardcovid={cardcovid} key={key} />;
          })}
        </div>
      </section>
    </StyledGlobalSection2>
  );
}

export default GlobalSection2;
