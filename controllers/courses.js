const Courses = require("../models/courses")





const getAllCourses = async (req, res) => {
    try {
        const courses = await Courses.find();
        res.status(200).json(courses);

    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const getCoursebyid = async (req, res) => {
    try {
        const courses = await Courses.find({ id: req.params.id })
        res.status(200).json(courses)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const postaCourse = async (req, res) => {
    //Using Aggregate Function to Get Max value from previous
    try {
        const [result1] = await Courses.aggregate([{ $group: { _id: null, maxvalue: { $max: "$id" } } }])
        console.log("result1", result1);
        const maxid = result1.maxvalue;   //result1.length > 0 ? result1[0].maxvalue : 0;
        const course = await Courses.insertOne({ id: maxid + 1, name: req.body.name});
        return res.status(200).json({ id: maxid + 1, name: req.body.name})

    } catch (error) {
        console.error("Error Occured", error);
        res.status(400).json(error.message);

    }

}


const updateCourse = async (req, res) => {
    try{
        const ifavaliable=await Courses.find({id: req.params.id})
        console.log(ifavaliable);
        if(ifavaliable);
        const updatestatus = await Courses.updateOne({id:req.params.id}, {$set: {name:req.body.name}});
        res.status(200).json({oldName: ifavaliable , Updateinfo:updatestatus})
    }
    catch(error){
        res.status(400).json(error.message);
    }
}

const deleteCourse = async (req, res) => {
    try {
        const ifavaliable=await Courses.find({id: req.params.id})
        console.log(ifavaliable);
        if(ifavaliable);
        const deletedItem=await Courses.deleteOne({id:req.params.id});
        res.status(200).json({CourseDelete:ifavaliable, status:{deletedItem}});

        
    } catch (error) {
         res.status(400).json(error.message);
    }

}


module.exports = {
    getAllCourses, getCoursebyid, postaCourse, updateCourse, deleteCourse,
};