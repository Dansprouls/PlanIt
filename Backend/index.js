import express from "express";
import * as dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import User from "./Models/User.js";

// currently not being used for mongo uri - just using localhost
dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("server is ready123");
});

console.log(process.env.MONGO_URI);

app.listen(3000, () => {
    connectDB();
    console.log("Server is running on port 3000");
});
