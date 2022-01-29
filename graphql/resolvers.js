import * as db from "./db"

const resolvers = {
  Query: {
    movies: () => db.getMovies(),
    movie: (_, { id }) => db.getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => db.addMovie(name, score),
    deleteMovie: (_, { id }) => db.deleteById(id),
  },
}

export default resolvers
