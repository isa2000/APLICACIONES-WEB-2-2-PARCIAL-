const express=require("express")
const router=express.Router()
const controlSchema=require("../models/controlSchema")
router.get("/", ()=>{
    
})


router.post("/control",(req, res)=>{
const control=controlSchema(req.body);
control.save()
.then((data)=>res.json(data))
.catch((error)=>res.json({message:error})
)
})


router.get("/control",(req, res)=>{
controlSchema.find()
.then((data)=>res.json(data))
.catch((error)=>res.json({message:error}))
})
    

router.put("/control/:id",(req, res)=>{
    const {id}=req.params;
    const {idcanal,idprograma,rating,}=req.body
    controlSchema.updateOne({_id:id}, {$set:{idcanal,idprograma,rating}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})


router.delete("/control/:id",(req, res)=>{
    const {id}=req.params;
    controlSchema.remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})




module.exports=router