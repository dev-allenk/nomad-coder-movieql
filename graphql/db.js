let movies = [
  {
    id: 0,
    name: "Star Wars",
    score: 10,
  },
  {
    id: 1,
    name: "Avengers",
    score: 99,
  },
  {
    id: 2,
    name: "The Godfather",
    score: 67,
  },
  {
    id: 3,
    name: "Logan",
    score: 77,
  },
]
export const getMovies = () => movies

export const getById = (id) => {
  const movie = movies.find((movie) => movie.id === id)
  return movie
}

export const deleteById = (id) => {
  const newMovies = movies.filter((movie) => movie.id !== id)
  movies = newMovies
  return movies
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  }
  movies.push(newMovie)
  return newMovie
}
