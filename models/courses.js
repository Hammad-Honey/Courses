const mongoose=require("mongoose");
const {Schema, model}=mongoose;

const courseSchema=new Schema({
    id:Number,
    name:{
        type:String,
        required:true,
        minlength:3
     },
})


module.exports=model("Courses", courseSchema);