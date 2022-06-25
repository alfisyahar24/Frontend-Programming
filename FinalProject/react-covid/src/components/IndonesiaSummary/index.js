import image from "./og.png";
import StyledIndonesiaSummary from "./indonesiasummary.styled";

function IndonesiaSummary() {
  return (
    <StyledIndonesiaSummary>
      <section>
        <h2>Indonesia Summary</h2>
        <h4>Summary Data Indonesia</h4>
        <div>
          <img src={image} alt="" />
        </div>
      </section>
    </StyledIndonesiaSummary>
  );
}

export default IndonesiaSummary;
