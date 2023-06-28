const express = require("express");


const cors = require('cors');


const app = express();
const Programa = require('./models/programa');

app.use(express.json());
app.use(cors());





app.get("/api/v2/programa", async (req,res)=>{
    const programa = await Programa.find();
    return res.send(programa);
})

app.post("/api/v2/programa", async (req,res)=>{
    const { descripcion} =  req.body;
    
    const programa = new Idioma({ descripcion})

    await programa.save()
  
    res.status(201).json(programa);
})


app.put("/api/v2/programa/:id", async (req,res)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedprograma =  await Programa.findByIdAndUpdate(id,data )
    res.json(updatedprograma);
})

app.delete("/api/v2/programa/:id", async (req,res)=>{
    const {id} = req.params;
    await Programa.findByIdAndDelete(id)
    res.json(`Se ha eliminado programa`);
})








module.exports= app;