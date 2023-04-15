import express from "express";
import router from "./routes/coinNet";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/", router);
app.set("port", port);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

export default app;
