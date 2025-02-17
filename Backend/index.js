import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

//allows access to .env file to retrieve mongodb uri
dotenv.config();

const app = express();

app.get("/users", (req, res) => {
    res.send("server is ready123");
});

console.log(process.env.MONGO_URI);

app.listen(3000, () => {
    connectDB();
    console.log("Server is running on port 3000");
});
