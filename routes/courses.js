const express= require('express');
const router=express.Router;


// ======================================= Random Data ===================================
let courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
    { id: 5, name: 'course5' },
]


// ========================================= Routes ======================================

router.get('/', (req, res) => {
    res.send(courses)
});

// =============== Get Single Course ==============
router.get('/:id', (req, res) => {
    const course = courses.find(parm => parm.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('Error 404 Page Not Found');
    res.status(200).send(course);
});

// ============= Adding  a New Cousrse ==============
router.post('/', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send(`Name is Required and should not be less than 3 characters`)
    }
    else {
        console.log(req.body);
        const course = {
            id: courses.length + 1,
            name: req.body.name

        }
        courses.push(course);
        res.status(201).send(course);
    }
});

// =========== Modifing a course ====================
router.put('/:id', (req, res) => {
    const course = courses.find(course => (course.id === parseInt(req.params.id)));  // Saving the Course object to modify
    console.log(course)
    if (course && typeof (req.body.name) === 'string' && req.body.name.length > 3)   // check if the course id exist
    {
        course.name = req.body.name;
        console.log("Course Updated + " + req.body.name)
        res.status(200).json(courses)
    }
    else {
        res.status(400).send("Data Put failed");
        console.log("Data Put failed");
    }

});
// ============= Deleting a course ================
router.delete('/:id',(req,res)=>{
    const course = courses.find(course => (course.id === parseInt(req.params.id))); // For Coures objec ref. in the memory
    if(course)
    {// To Delte We need to get index of the course in the array
        const indexofcourse=courses.findIndex(coursIndex=> coursIndex.id===parseInt(req.params.id) );
        console.log(indexofcourse)
        console.log("Index of the Course being Delted");
        courses.splice(indexofcourse,1);
        res.status(200).send(courses);
    }
    else{
        console.log('Did not find the course you mentioned');
        res.status(400).send("Unale to delete not existed items");
    }

});




module.exports = router;