

let courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
    { id: 5, name: 'course5' },
]


const getAllCourses = (req, res) => {
    res.send(courses)
}


const getCoursebyid = (req, res) => {
    const course = courses.find(parm => parm.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('Error 404 Page Not Found');
    res.status(200).send(course);

}



module.exports ={
    getAllCourses, getCoursebyid
};