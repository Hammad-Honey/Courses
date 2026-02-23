const express= require('express');
const router=express.Router();
const controller=require('../controllers/courses.js');




router.get('/', controller.getAllCourses);
router.get('/:id', controller.getCoursebyid);
router.post('/', controller.postaCourse);
router.put('/:id', controller.updateCourse);
router.delete('/:id',controller.deleteCourse);




module.exports = router;