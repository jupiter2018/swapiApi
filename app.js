const express = require("express");
const app = express();
const mongoose = require('mongoose')
const models = require('./schemas.js')
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const MongoClient = require("mongodb").MongoClient;
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


mongoose.connect(
  "mongodb://localhost:27017/swapiApi",
  { useUnifiedTopology: true } 
)
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log('database connected!')
});

app.get("/", async(req, res) => {
    const result = await db.collection("resources").find().toArray();
    res.send(result)
    
})
app.get("/films", async(req, res) => {
    let result = await models.Film.find()
    
   res.send(result);
});

app.get('/films/:id', async (req, res) => {
    let result = await models.Film.find({ pk: req.params.id })
    res.send(result)
})

app.listen(3000, () => {
  console.log("hello listening!");
});
