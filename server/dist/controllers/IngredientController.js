"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientController = void 0;
const express_1 = __importDefault(require("express"));
const Ingredient_1 = require("../models/Ingredient");
class IngredientController {
    constructor() {
        this.router = express_1.default.Router();
        this.route = "ingredients";
        this.initializeSubRoutes();
    }
    initializeSubRoutes() {
        this.router.get('/', this.getIngredient);
    }
    async getIngredient(req, res) {
        try {
            const ingredients = await Ingredient_1.ingredient.find();
            res.send(ingredients);
        }
        catch (error) {
            res.send(error);
        }
    }
}
exports.IngredientController = IngredientController;
//# sourceMappingURL=IngredientController.js.map