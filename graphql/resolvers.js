const allenk = {
  name: "allenk",
  age: 33,
  gender: "male",
}

const resolvers = {
  Query: {
    person: () => allenk,
  },
}

export default resolvers
