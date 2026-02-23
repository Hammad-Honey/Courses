const mongoose=require("mongoose");
const {Schema, model}=mongoose;

const courseSchema=new Schema({
    id:Number,
    title:{
        type:String,
        required:true,
        minlength:3
     },
})


module.exports=model("Courses", courseSchema);