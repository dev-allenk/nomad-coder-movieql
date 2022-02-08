import * as db from "./db"

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => db.getMovies(limit, rating),
    movie: (_, { id }) => db.getMovie(id),
  },
}

export default resolvers
