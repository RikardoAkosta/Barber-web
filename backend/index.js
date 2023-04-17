import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
import autRouter from "./routes/auth.routes.js";

const app = express();

app.use("/api/v1", autRouter);

const PORT = process.env.PORT || 6000;

app.listen(6000, () => console.log("😁😀😀😀http://localhost" + PORT));
