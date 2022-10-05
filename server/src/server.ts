import {App} from "./app";


const port = 5001;
const connectionString = "mongodb+srv://josandrea:060896@cluster0.dnznrwl.mongodb.net/?retryWrites=true&w=majority";

const app = new App ( port, connectionString);

app.start();
