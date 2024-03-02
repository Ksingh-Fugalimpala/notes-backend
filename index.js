import express from "express";
import { PORT, MONURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import noteRoutes from "./routes/notesRoute.js";


const app = express();

app.use(express.json());
app.use(cors("*"));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN stack");
});

app.use("/notes-data", noteRoutes);

mongoose
  .connect(MONURL)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log(`App is working on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
