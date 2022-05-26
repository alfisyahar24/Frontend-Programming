import styled from "styled-components";
import StyledMovie from "./Movie.styled";

function Movie(props) {
  // Destructing object props
  const { movie } = props;

  return (
    <StyledMovie>
      <img src={movie.poster} alt="" />
      <h3>{movie.title}</h3>
      <h1>{movie.type}</h1>
      <p>{movie.year}</p>
    </StyledMovie>
  );
}

export default Movie;
