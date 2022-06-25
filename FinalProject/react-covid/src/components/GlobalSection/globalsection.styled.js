import styled from "styled-components";

const StyledGlobalSection = styled.div`
  margin: 1rem 0;

  section {
    margin: 5rem 0;
    text-align: center;
  }

  h4 {
    color: #2f99bc;
    margin-bottom: 1rem;
    font-size: 1.563rem;
  }

  h2 {
    margin-bottom: 0.5rem;
    font-size: 2.44rem;
    color: #06d6a0;
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

  .cardcovid__container {
    display: flex;
    flex-direction: column;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .cardcovid__container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

export default StyledGlobalSection;
