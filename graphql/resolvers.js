import * as db from "./db"

const resolvers = {
  Query: {
    people: () => db.people,
    person: (_, { id }) => db.getById(id),
  },
}

export default resolvers
