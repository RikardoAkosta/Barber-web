import "dotenv/config";
import "./database/connectdb.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 6000;

app.listen(6000, () => console.log("😁😀😀😀http://localhost" + PORT));
