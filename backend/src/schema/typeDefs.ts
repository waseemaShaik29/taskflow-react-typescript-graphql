export const typeDefs = /* GraphQL */ `
  type Task {
    id: ID!
    title: String!
    description: String
    status: String!
  }

  type Query {
    tasks: [Task!]!
  }
`;