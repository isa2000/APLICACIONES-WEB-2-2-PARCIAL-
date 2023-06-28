const express = require("express");


const cors = require('cors');


const app = express();
const Canal = require('./models/Canal');



app.use(express.json());
app.use(cors());





app.get("/api/v2/canal", async (req,res)=>{
    const canal = await canal.find();
    return res.send(canal);
})

app.post("/api/v2/canal", async (req,res)=>{
    const { nombre, id } =  req.body;
    
    const canal = new canal({ nombre, id})

    await canal.save()
  
    res.status(201).json(canal);
})

app.put("/api/v2/canal/:id", async (req,res)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedcanal =  await canal.findByIdAndUpdate(id,data )
    res.json(updatedcanal);
})

app.delete("/api/v2/canal/:id", async (req,res)=>{
    const {id} = req.params;
    await canal.findByIdAndDelete(id)
    res.json(`Se ha eliminado el canal`);
})




module.exports= app;