import express from "express";
import { Note } from "../models/notesmodels.js";
import { User } from "../models/usersmodels.js";

const noteRoutes = express.Router();

//route to add a new note in mongodb

noteRoutes.post("/", async (request, response) => {
  try {
    if (!request.body.title || !request.body.color) {
      return response.status(400).send({ message: "Send all required fields" });
    }
    const newnote = {
      title: request.body.title,
      notescontent: request.body.notescontent,
      color: request.body.color,
    };
    const note = await Note.create(newnote);
    return response.status(201).send(note);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//route to get all notes

noteRoutes.get("/", async (request, response) => {
  try {
    const notes = await Note.find({});

    return response.status(200).json({
      count: notes.length,
      data: notes,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//route to update Notes

noteRoutes.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Note.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Note not found" });
    }

    return response.status(200).send({ message: "Note updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//delete a Note in mongodb

noteRoutes.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Note.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Note not found" });
    }

    return response.status(200).send({ message: "Note deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//route to add a new user

noteRoutes.post("/user", async (request, response) => {
  try {
    if (!request.body.uname || !request.body.upass) {
      return response.status(400).send({ message: "Send all required fields" });
    }
    const newuser = {
      uname: request.body.uname,
      upass: request.body.upass,
    };
    const user = await User.create(newuser);
    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default noteRoutes;
