const express = require('express');
const app = express();

// Custom Middleware

function logger(req,res,next){
    console.log(`Request Method is ${req.method} from URL ${req.url} Timestamp- [${new Date().toString()}]`);
    next();
}


module.exports=logger;