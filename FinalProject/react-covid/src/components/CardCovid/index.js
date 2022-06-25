import StyledCard from "./cardcovid.styled";

function CardCovid(props) {
  const { cardcovid } = props;

  return (
    <StyledCard>
      <div className="cardcovid__column">
        <div className="cardcovid__card">
          <h3>{cardcovid.status}</h3>
          <h2>{cardcovid.total}</h2>
        </div>
      </div>
    </StyledCard>
  );
}

export default CardCovid;
