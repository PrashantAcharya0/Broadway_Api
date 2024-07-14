import express from "express";
import connectDB from "./connect.db.js";
import CouresRoutes from "./course/course.controller.js";
const app = express();

// to make app understand json
app.use(express.json());

// database connection
connectDB();

// register routes

app.use("/course", CouresRoutes);

// network port and server
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
