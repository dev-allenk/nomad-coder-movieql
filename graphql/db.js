export const people = [
  { id: 0, name: "allenk", age: 33, gender: "male" },
  {
    id: 1,
    name: "hr",
    age: 22,
    gender: "female",
  },
  { id: 2, name: "hs", age: 20, gender: "female" },
  {
    id: 3,
    name: "yg",
    age: 29,
    gender: "male",
  },
]

export const getById = (id) => {
  const person = people.find((person) => person.id === id)
  return person
}
