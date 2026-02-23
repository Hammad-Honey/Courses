import mongoose from "mongoose";
const {schema}=mongoose;

const courses=new schema({
    id:Number,
    title:String,
})