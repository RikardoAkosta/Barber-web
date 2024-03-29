import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
import autRouter from "./routes/auth.routes.js";

const app = express();
app.use(
  express.json()
); /* con esto estamos recibiendo las peticiones de postman en archivo json */
app.use("/api/v1/auth", autRouter);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log("😁😀😀😀 http://localhost: " + PORT));
