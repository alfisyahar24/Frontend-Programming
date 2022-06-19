import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function PopularMovie() {
  // Simpan API KEY dan URL ke Variable
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const URL = `https://api.themoviedb.org/3/movie/popular/?api_key=${API_KEY}`;

  // BUAT DISPATCH
  const dispatch = useDispatch();

  /**
   * Melakukan useEffect.
   * useEffect to perform other jobs: fetch data
   */

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    /**
     * Menggunakan library axios.
     * Axios digunakan untuk melakukan fetch data.
     */
    const response = await axios(ENDPOINTS.POPULAR);

    dispatch(updateMovies(response.data.results));
  }

  /**
   * Render Component Movies.
   * Kirim props movies yang berisi nilai state movies
   */
  return (
    <>
      <Hero />
      <Movies title="Popular Movies" />
    </>
  );
}

export default PopularMovie;
