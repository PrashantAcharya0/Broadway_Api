import mongoose from "mongoose";
import Yup from "yup";
import Course from "./course.model.js";

export const validateMongoIdFromParams = (req, res, next) => {
  // extract course id from req.params
  const id = req.params.id;

  // check for mongo id validity
  const isValidId = mongoose.isValidObjectId(id);

  // if not valid mongo id, throw error
  if (!isValidId) {
    return res.status(400).send({ message: "Invalid mongo id." });
  }

  next();
};

export const deleteCourse = async (req, res) => {
  // extract Course id from req.params
  const couresId = req.params.id;

  // find course
  const requiredCourse = await Course.findById(couresId);

  // if not course, throw error
  if (!requiredCourse) {
    return res.status(404).send({ message: "Course does not exist." });
  }

  // delete course
  await Course.findByIdAndDelete(couresId);

  // send res
  return res.status(200).send({ message: "Coures is deleted successfully." });
};

export const validateCourseData = async (req, res, next) => {
  const couresValidationSchema = Yup.object({
    name: Yup.string("course name should be string")
      .required("Course name is required.")
      .trim()
      .max(30, "Name must be at most 30 characters.")
      .lowercase(),
    duration: Yup.string().required().trim().min(10).max(15),
    tutorName: Yup.string()
      .trim()
      .required("tutor name is required")
      .max(35, "tutor name must be at most 30 characters."),
    price: Yup.number()
      .max(30, "Price must be at most 30 character.")
      .nullable(),
  });

  try {
    const validatedData = await couresValidationSchema.validate(req.body);
    req.body = validatedData;
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};

export const addCourse = async (req, res) => {
  //  extract new values  from req.body
  const newCourse = req.body;

  // insert into db
  await Course.create(newCourse);

  return res.status(201).send({ message: "Course is added successfully." });
};