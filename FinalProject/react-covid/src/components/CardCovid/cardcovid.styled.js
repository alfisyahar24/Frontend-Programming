import styled from "styled-components";

const StyledCard = styled.div`
  margin-bottom: 1rem;

  h3 {
    color: #4361ee;
    font-size: 1.953rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    color: #b5179e;
    font-size: 2.44rem;
  }

  .cardcovid__column {
    max-width: 100%;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }

  .cardcovid__card {
    box-shadow: 5px 5px 5px #06d6a0;
    padding: 0.5rem;
    text-align: center;
    background-color: #f1f1f1;
    border-radius: 10px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    flex-basis: 50%;
    margin: 0.5rem;
  }

  /* Large Screen */
  @media (min-width: 992px) {
    flex-basis: 30%;
  }
`;
export default StyledCard;
