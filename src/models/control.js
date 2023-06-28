const mongoose=require("mongoose")

const controlSchema=mongoose.Schema({
    idcanal:{type:String, 
        required:true},

    idprograma:{type:String,
         required:true},

    rating:{type:String, 
        required:true},

    

})

module.exports=mongoose.model("Dog", controlSchema)