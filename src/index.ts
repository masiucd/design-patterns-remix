import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/userResolver";
import { MovieResolver } from "./resolvers/MovieResolver";

(async () => {
  const app = express();

  await createConnection();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, MovieResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  server.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log(`🚀 server is on port 4000/graphql`);
  });
})();
