import axios from "axios"
import qs from "query-string"

const API_URL = "https://yts.mx/api/v2/list_movies.json"

export const getMovies = (limit, rating) => {
  const query = qs.stringify({ limit, minimum_rating: rating })

  return axios.get(`${API_URL}?${query}`).then((res) => res.data.data.movies)
}
