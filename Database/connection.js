const mongoose = require('mongoose');
const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("Mongo DB connected");
    }
    catch(error ){
        console.error(error);
        process.exit(1);
    }
}
module.exports=connectDB;