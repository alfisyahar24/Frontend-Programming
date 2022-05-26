import { useEffect, useState } from "react";
import Button from "../ui/Button";
import styles from "./Hero.module.css";
import StyledHero from "./Hero.styled";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");

  async function fetchMovie(movie) {
    // Melakukan side effect: fetch data movie (api)
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
    );

    const data = await response.json();

    // Set movie dengan data movie hasil fetch
    setMovie(data);
  }

  useEffect(fetchMovie, []);

  console.log(movie);

  return (
    <StyledHero>
      <section>
        <StyledHero>
          <h2>{movie.Title}</h2>
          <h3>{movie.Genre}</h3>
          <p>{movie.Plot}</p>
          {/* <button className={styles.hero__button}>Watch</button> */}
          <Button variant="primary">Watch Movie</Button>
        </StyledHero>
        <StyledHero>
          <img src={movie.Poster} alt={movie.Title} />
        </StyledHero>
      </section>
    </StyledHero>
  );
}

export default Hero;
