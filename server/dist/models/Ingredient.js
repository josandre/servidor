"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredient = exports.Ingrediente = void 0;
const mongoose_1 = require("mongoose");
class Ingrediente {
    constructor(partial) {
        if (partial) {
            Object.assign(this, partial);
        }
    }
}
exports.Ingrediente = Ingrediente;
const ingredientSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
});
exports.ingredient = (0, mongoose_1.model)("Ingredient", ingredientSchema);
//# sourceMappingURL=Ingredient.js.map