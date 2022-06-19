import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function Detail() {
  const { id } = useParams();
  // const API_KEY = process.env.REACT_APP_API_KEY;

  // BUAT DISPATCH
  const dispatch = useDispatch();

  useEffect(() => {
    getRecommendationMovies();
  }, [id]);

  async function getRecommendationMovies() {
    // const URL = `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`;
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(id));
    dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recommendation Movies" />
    </>
  );
}

export default Detail;
