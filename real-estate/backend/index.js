const express = require("express");
const cors = require("cors");
const connectToMongo = require('./db/db');
connectToMongo();
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json());


app.use('/api/auth', require('./routes/auth'));
app.get('/', (req, res) => {
    res.send("Ahsan")
})

app.listen(port, () => {
    console.log(`Real estate app listening at port http://localhost:${port}`);
})