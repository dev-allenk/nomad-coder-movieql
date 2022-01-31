import * as db from "./db"

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => db.getMovies(limit, rating),
  },
}

export default resolvers
