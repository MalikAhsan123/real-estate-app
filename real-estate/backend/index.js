import express from "express";
import cors from "cors";
import connectToMongo from "./db/db.js";
connectToMongo();
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json());

import authRoutes from "./routes/auth.js";
app.use('/api/auth', authRoutes);

app.use('/uploads', express.static('uploads'));

import propertyRoutes from "./routes/property.js";
app.use('/api/properties', propertyRoutes);

app.get('/', (req, res) => {
    res.send("Ahsan")
})

app.listen(port, () => {
    console.log(`Real estate app listening at port http://localhost:${port}`);
})