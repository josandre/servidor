"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
const queries = require("./schemas/ingredientSchema");
const express_graphql_1 = require("express-graphql");
class App {
    constructor(port, connectionString) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.connectionString = connectionString;
    }
    start() {
        const dbManager = new db_1.DBManager(this.connectionString);
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        dbManager.connect()
            .then(() => {
            console.log("Connection successful");
        })
            .catch((error) => {
            console.log(error);
        });
        this.app.listen(this.port, () => {
            return console.log(`server is listening on http://localhost:${this.port}`);
        });
        this.app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
            schema: queries,
            graphiql: true
        }));
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map