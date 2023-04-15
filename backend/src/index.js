import app from "./app";
import { database } from "./database";

database();

app.listen(app.get("port"));



console.log("server listening on port ", app.get("port"));
