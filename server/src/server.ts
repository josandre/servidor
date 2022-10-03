import {App} from "./app";

const port = 5001;
const connectionString = "mongodb+srv://Carlos:1234@cluster0.hxnl8qu.mongodb.net/?retryWrites=true&w=majority";
const app = new App (port, connectionString);

app.start();