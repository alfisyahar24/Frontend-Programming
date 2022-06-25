import styled from "styled-components";

const StyledProvinsi = styled.div`
  margin: 1rem 0;
  overflow-x: auto;
  max-width: 100%;

  section {
    margin: 5rem 0;
    text-align: center;
  }

  h2 {
    margin-bottom: 0.5rem;
    font-size: 2.44rem;
    color: #06d6a0;
  }

  h4 {
    color: #2f99bc;
    margin-bottom: 2rem;
    font-size: 1.563rem;
  }

  table {
    width: 50%;
    border-collapse: collapse;
    text-align: center;
  }

  th {
    border: 1px solid;
    border-color: #64748b;
    color: white;
    background-color: #06d6a0;
    height: 3rem;
    width: 3rem;
  }

  td {
    border: 1px solid;
    border-color: #64748b;
    color: black;
    height: 3rem;
    width: 3rem;
  }

  .provinsi__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    table {
      width: 80%;
    }

    .provinsi__container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: -3rem auto;

    table {
      width: 100%;
    }
  }
`;
export default StyledProvinsi;
