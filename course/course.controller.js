import express from "express";
import {
  addCourse,
  deleteCourse,
  validateMongoIdFromParams,
  validateCourseData,
} from "./course.service.js";

const router = express.Router();

// * add course
router.post("/add", validateCourseData, addCourse);

// * delete course
router.delete("/delete/:id", validateMongoIdFromParams, deleteCourse);

export default router;
