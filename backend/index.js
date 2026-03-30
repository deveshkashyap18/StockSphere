require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

const {HoldingsModel} = require("./model/HoldingsModel");
const { PositionsModel } = require('./model/PositionsModel');
const {OrdersModel} = require("./model/OrdersModel");
const authRoute = require("./Routes/AuthRoute");
const cookieParser = require("cookie-parser");


const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);

app.get("/allHonldings", async (req, res)=>{
    let allHoldings= await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get("/allPositions", async (req, res)=>{
    let allPositions= await PositionsModel.find({});
    res.json(allPositions);
})

app.post("/newOrder", async (req, res)=>{
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    })
    newOrder.save();
    res.send("Order Saved!");
})

app.listen(PORT, ()=>{
    console.log("App Started");
    mongoose.connect(url);  
    console.log("DB connected!");
})