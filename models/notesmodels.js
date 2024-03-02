import mongoose from "mongoose";

const notesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    notescontent: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Note = mongoose.model("Note", notesSchema, "notes");
