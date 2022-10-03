import {MController} from "./controllers/MController";
import express from 'express';
import {DBManager} from "./db";
import cors from 'cors';
import {ingredient, Ingrediente} from "./models/Ingredient";

export class App{
    private readonly app = express();
    private readonly port: number;
    private readonly  connectionString: string;

    constructor(controllers: Array<MController>, port: number, connectionString: string) {
        this.port = port;
        this.connectionString = connectionString;
        this.initializeRoutes(controllers);

    }

    private initializeRoutes(controllers: Array<MController>){
        controllers.forEach((controller) =>{
            this.app.use(`/api/${controller.route}`, controller.router);
        })
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
    }

    public async createTest(){

        const ingredientInserted1 = new ingredient({
            name: "culantro",
            cost: 1000
        });
        await ingredientInserted1.save();

       const ingredientInserted2 = new ingredient({
           name : "pollo",
           cost: 2000
       })
        await  ingredientInserted2.save();
    }


}