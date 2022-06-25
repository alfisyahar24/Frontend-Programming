import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #06d6a0;
  padding: 1rem;
  color: #fff;

  footer {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 3.052rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      margin-bottom: 0;
    }

    ul {
      flex-direction: row;
    }

    li {
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
  }
`;
export default StyledFooter;
