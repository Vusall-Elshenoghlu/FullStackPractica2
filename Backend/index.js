const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")
app.use(express.json());
const cors = require("cors");
app.use(cors())

app.listen(4000, () =>{
    console.log("server is running on port 4000...");
})

let productSchema = new mongoose.Schema({
    name:String,
    age:Number,
    description:String,
    profession:String
})
let ProductModel = mongoose.model("humans",productSchema)

app.get("/" ,(req,res) =>{
    res.send("Hello from node API")
})
app.get("/api/humans/",async (req,res) =>{
    let myProducts = await ProductModel.find()
    res.send(myProducts)
})
app.get("api/humans/get/:id", async (req,res) =>{
    let myProduct = await ProductModel.findById()
    res.send({
        message:"Succes GetByID",
        data:myProduct
    })
})
app.post("/api/humans", async (req,res) =>{
    let newHuman = ProductModel(req.body);
    await newHuman.save();
    res.post("Succes Post...");
    data:req.body;
})

app.delete("/api/humans/:id", async (req,res) =>{
    let {id} = req.params;
    await ProductModel.findByIdAndDelete(id);
    res.send({
        message:"Succes Delete..."
    })
})

mongoose.connect("mongodb+srv://vusalehaf206:vusal206206@learn.ravyg.mongodb.net/")
.then( () => {
    console.log("Connected to Database...");
})


