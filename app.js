const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors')
app.use(cors(
    // {   origin: ['http.localhost:5500'],
    //     methods: ['GET','POST']
    // }
));
// ====== Importing Database
const DB = require('./Database/connection');
DB();


// ====== Routes Importing
const courses=require('./routes/courses');

// ====== Imorting Cutom Middleware
const logger=require('./middlewares/logger');

// ================ Builtin Middleware ==================== // Global Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));   // This URL encoded will convert form sumbission to json
app.use(express.static('static'))  //This will server Static files domain.com/file_Name.ext add option like __dirname
app.use(logger)







// ======================================= Routes =======================================
app.get('/', (req, res) => {
    res.status(200).send('This is Default page');
})

app.use('/api/courses',courses); 


// ======================================= Server =======================================
app.listen(PORT, () => {
    console.log(`Sever Running on http://localhost:${PORT}`);
}
);
