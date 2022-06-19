import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function NowPlayingMovie() {
  // Simpan API KEY dan URL ke Variable
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const URL = `https://api.themoviedb.org/3/movie/now_playing/?api_key=${API_KEY}`;

  // BUAT DISPATCH
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    /**
     * Menggunakan library axios.
     * Axios digunakan untuk melakukan fetch data.
     */
    const response = await axios(ENDPOINTS.NOWPLAYING);

    dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies title="Now Playing Movies" />
    </>
  );
}

export default NowPlayingMovie;
