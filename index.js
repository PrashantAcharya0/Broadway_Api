import express from 'express';
import connectDB from './connect.db.js';
import CouresRoutes from './course/course.controller.js';
import cors from 'cors';

const app = express();

// to make app understand json
app.use(
  cors({
    origin: '*', // allow all origins
  })
);

// database connection
await connectDB();

// register routes

app.use('/course', CouresRoutes);

// network port and server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
