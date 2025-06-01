import express from "express";

// const cors = require("cors");
import cors from "cors";

// const connectToMongo = require('./db/db');
import connectToMongo from "./db/db.js";


// const express = require("express");
// const cors = require("cors");
// const connectToMongo = require('./db/db');

connectToMongo();
const app = express();
 app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json());


import authRoutes from "./routes/auth.js";
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send("Ahsan")
})

app.listen(port, () => {
    console.log(`Real estate app listening at port http://localhost:${port}`);
})