import taskService from "./task.service.js";

class TaskController {
  #_service;
  constructor() {
    this.#_service = taskService;
  }

  // create task
  createTask = async (req, res, next) => {
    try {
      const data = await this.#_service.createOneTask(req.body);
      if (!data) {
        res.status(403).send({
          message: "Data is not created",
        });
        return;
      }
      res.redirect("/")
    } catch (error) {
      next(error);
    }
  };

  // delete task
  deleteTask = async(req, res, next) => {
    try {
        const data = await this.#_service.deleteOneTask(req.params.id);
        if (!data) {
            res.status(404).send({
                message:"Task is not found"
            });
            return
        }
        res.redirect("/");
    } catch (error) {
        next(error)
    }
  }
}

export default new TaskController();
