import { ConflictError } from "../../errors/conflict.error.js";
import { Task } from "./task.schema.js";

class TasksService {
  #_model;
  constructor() {
    this.#_model = Task;
  }

  // create task
  async createOneTask({ name, isDone }) {
    try {
      const task = await this.#_model.create({
        name,
        isDone,
      });
      return task;
    } catch (error) {
      throw new ConflictError(error.message);
    }
  }

  // delete task
  async deleteOneTask(id) {
    try {
        const data = await this.#_model.findByIdAndDelete(id);
        return data
    } catch (error) {
        throw new ConflictError(error.message)
    }
  }

  // done task
  async finishOneTask(id){
    try {
        const data = await this.#_model.findByIdAndUpdate(id,{
            isDone:"true"
        })
        return data
    } catch (error) {
        throw new ConflictError(error.message)
    }
  }

  // undone task
  async unFinishOneTask(id){
    try {
        const data = await this.#_model.findByIdAndUpdate(id,{
            isDone:"false"
        });
        return data
    } catch (error) {
        throw new ConflictError(error.message)
    }
  }
}

export default new TasksService();
