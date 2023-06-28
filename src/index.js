const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const userRoutes=require("./routes/control")
const app=express()
const port= process.env.PORT || 9000

app.use(express.json())
//middleware
app.use("/api", userRoutes)

app.get("/", (req, res)=>{
res.send("Welcome to my app")
})
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://localhost:27017/Academy").then(()=>{
    console.log("CONNECTED TO THE DATABASE")
}).catch((error)=>{
    console.log(error)
})


app.listen(port,()=>{
    console.log("listening on port", port)
}) 


