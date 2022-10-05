
import express from 'express';
import {DBManager} from "./db";
import cors from 'cors';
const queries = require("./schemas/ingredientSchema");
import {graphqlHTTP} from "express-graphql";

export class App{
    private readonly app = express();
    private readonly port: number;
    private readonly  connectionString: string;

    constructor(port: number, connectionString: string) {
        this.port = port;
        this.connectionString = connectionString;


    }



    public start(){
        const dbManager = new DBManager(this.connectionString);
        this.app.use(express.json());
        this.app.use(cors());

        dbManager.connect()
            .then(() => {
                console.log("Connection successful");
            })
            .catch((error) => {
                console.log(error);
            })

        this.app.listen(this.port, () =>{
            return console.log(`server is listening on http://localhost:${this.port}`);
        })

        this.app.use('/graphql', graphqlHTTP({
            schema: queries,
            graphiql: true
        }))
    }




}