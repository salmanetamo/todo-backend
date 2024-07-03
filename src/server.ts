import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { resolvers } from './resolvers';

const startServer = async () => {
    // Load GraphQL schema
    const typeDefs = readFileSync(join(__dirname, './schema.graphql'), 'utf8');

    // Initialize Apollo Server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    // Start server
    const app = express();
    await server.start();
    server.applyMiddleware({ app: app as express.Application });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();
