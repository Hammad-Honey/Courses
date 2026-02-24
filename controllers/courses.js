const Courses = require("../models/courses")





const getAllCourses = async (req, res) => {
    try {
        const courses = await Courses.find();
        res.status(200).json(courses)

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
        const result1 = await Courses.aggregate([{ $group: { _id: null, maxvalue: { $max: "$id" } } }])          // This will return a array with a [{index 0}]
        console.log("result1", result1);
        const maxid = result1.length > 0 ? result1[0].maxvalue : 0;
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
        if(ifavaliable)
        await Courses.updateOne({id:req.params.id}, {$set: {name:req.body.name}})
        res.status(200).send("Sucessfully Updated")
    }
    catch(error){
        res.status(400).json(error.message);
    }
}

const deleteCourse = (req, res) => {
    const course = courses.find(course => (course.id === parseInt(req.params.id))); // For Coures objec ref. in the memory
    if (course) {// To Delte We need to get index of the course in the array
        const indexofcourse = courses.findIndex(coursIndex => coursIndex.id === parseInt(req.params.id));
        console.log(indexofcourse)
        console.log("Index of the Course being Delted");
        courses.splice(indexofcourse, 1);
        res.status(200).send(courses);
    }
    else {
        console.log('Did not find the course you mentioned');
        res.status(400).send("Unale to delete not existed items");
    }

}


module.exports = {
    getAllCourses, getCoursebyid, postaCourse, updateCourse, deleteCourse,
};