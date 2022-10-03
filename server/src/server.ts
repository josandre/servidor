import {App} from "./app";
import {Ingrediente} from "./models/Ingredient";
import {IngredientController} from "./controllers/IngredientController";

const port = 5001;
const connectionString = "mongodb+srv://Carlos:1234@cluster0.hxnl8qu.mongodb.net/?retryWrites=true&w=majority";
const ingredientController = new IngredientController();

const app = new App ([ingredientController], port, connectionString);

app.start();
