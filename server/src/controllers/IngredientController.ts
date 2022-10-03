import express from "express";
import {MController} from "./MController";
import {Ingrediente, ingredient} from "../models/Ingredient";

export class IngredientController implements MController{
    readonly route: string;
    readonly router: express.Router;

    constructor() {
        this.router = express.Router();
        this.route = "ingredients";
        this.initializeSubRoutes();
    }

    initializeSubRoutes() {
        this.router.get('/', this.getIngredient);
    }

    private async getIngredient(req: express.Request, res:express.Response){
        try{
            const ingredients = await ingredient.find();
            res.send(ingredients);
        }catch (error){
            res.send(error);
        }

    }
}