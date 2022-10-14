import {ApolloServer} from "apollo-server-express";
import Express from "express";
import 'reflect-metadata';
import {buildSchema} from "type-graphql";
import {DBManager} from "./db";
import {ClientResolver} from "./resolvers/clientResolvers";
import {IngredientResolver} from "./resolvers/ingredientResolvers";

const executeServer = async ()=>{
    const port = 5001;
    const connectionString = "mongodb+srv://josandrea:060896@cluster0.dnznrwl.mongodb.net/?retryWrites=true&w=majority";

    const schema = await buildSchema({
        resolvers: [ClientResolver, IngredientResolver],
        emitSchemaFile: true,
        validate: false
    });

    const db = new DBManager(connectionString);
    await db.connect();

    const server = new ApolloServer({schema: schema});
    const expressServer: Express.Application = Express();

    await server.start();
    server.applyMiddleware({app: expressServer});//connecting Apollo-server to the HTTP framework Express using ApplyMiddleware
     expressServer.listen({port}, () =>
     console.log(`server is listening on http://localhost:${port}`)
     );
}

executeServer().catch((error) => {
    console.log(error, 'error')
})







