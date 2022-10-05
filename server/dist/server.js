"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = 5001;
const connectionString = "mongodb+srv://josandrea:060896@cluster0.dnznrwl.mongodb.net/?retryWrites=true&w=majority";
const app = new app_1.App(port, connectionString);
app.start();
//# sourceMappingURL=server.js.map