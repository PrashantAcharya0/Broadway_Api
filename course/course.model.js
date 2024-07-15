import mongoose from "mongoose";

// schema

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 25,
    trim: true,
  },
  duration: {
    type: String,
    required: true,
    maxlength: 15,
    trim: true,
  },
  tutorName: {
    type: String,
    required: true,
    maxlength: 25,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
});

// collection (model)
const Course = mongoose.model("Course", courseSchema);

export default Course;
