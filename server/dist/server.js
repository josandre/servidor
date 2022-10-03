"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const IngredientController_1 = require("./controllers/IngredientController");
const port = 5001;
const connectionString = "mongodb+srv://Carlos:1234@cluster0.hxnl8qu.mongodb.net/?retryWrites=true&w=majority";
const ingredientController = new IngredientController_1.IngredientController();
const app = new app_1.App([ingredientController], port, connectionString);
app.start();
//# sourceMappingURL=server.js.map