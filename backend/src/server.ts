import { createServer } from "node:http";

import {
  createYoga,
  createSchema
} from "graphql-yoga";

import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./resolvers/resolvers.js";

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers
  })
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log(
    "GraphQL server running at http://localhost:4000/graphql"
  );
});