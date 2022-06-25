import styled from "styled-components";

const StyledForm = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
    padding: 12px 3px;
    margin-bottom: 15px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 7px;
    flex-direction: column;
  }

  input:focus {
    border: 1px solid #4361ee;
  }

  h2 {
    color: #06d6a0;
    margin-bottom: 0.5rem;
    font-size: 2.44rem;
    text-align: center;
  }

  select {
    width: 100%;
    padding: 12px 3px;
    margin-bottom: 15px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 7px;
    box-sizing: border-box;
    flex-direction: column;
  }

  label {
    color: #64748b;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #fff;
    display: block;
    margin: 0 auto;
    width: 100%;
    transition-duration: 0.4s;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  option {
    color: grey;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-top: 1rem;
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
      margin: -4rem 0;
    }

    .formcovid__right {
      flex-basis: 50%;
      margin-right: 1rem;
    }

    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 1rem;
    }
  }
`;
export default StyledForm;
