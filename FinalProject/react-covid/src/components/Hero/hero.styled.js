import styled from "styled-components";

const StyledHero = styled.div`
  margin: 1rem 0;
  padding: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  h2 {
    color: #06d6a0;
    margin-bottom: 0.5rem;
    font-size: 2.44rem;
  }

  h4 {
    color: #2f99bc;
    margin-bottom: 1rem;
    font-size: 1.563rem;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
    text-align: justify;
  }

  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #fff;
    font-size: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    /* border-radius: 25px; */
  }

  /* Medium Screen */
  @media (min-width: 768px) {
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    section {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      text-align: left;
    }

    .hero__left {
      flex-basis: 50%;
    }

    .hero__right {
      flex-basis: 50%;
    }
  }
`;
export default StyledHero;
