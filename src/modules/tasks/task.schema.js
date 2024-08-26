import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [2, "Kamida 2 bolishi kerak uzunligi!"],
      required: true,
    },
    isDone: {
      type: String,
      default: false
    },
  },
  {
    _id: true,
    timestamps: true,
    collection: "tasks",
  }
);

export const Task = mongoose.model("tasks", taskSchema);
