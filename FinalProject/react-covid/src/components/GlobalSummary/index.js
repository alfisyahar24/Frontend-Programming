import image from "./og.png";
import StyledGlobalSummary from "./globalsummary.styled";

function GlobalSummary() {
  return (
    <StyledGlobalSummary>
      <section>
        <h2>Global Summary</h2>
        <h4>Summary Data Global</h4>
        <div className="gs__container">
          <img src={image} alt="" />
        </div>
      </section>
    </StyledGlobalSummary>
  );
}

export default GlobalSummary;
