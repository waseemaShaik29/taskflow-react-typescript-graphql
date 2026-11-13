const tasks = [
  {
    id: "1",
    title: "Learn React",
    description: "Understand React Hooks",
    status: "TODO"
  },
  {
    id: "2",
    title: "Learn GraphQL",
    description: "Understand Queries and Mutations",
    status: "IN_PROGRESS"
  }
];

export const resolvers = {
  Query: {
    tasks: () => tasks
  }
};