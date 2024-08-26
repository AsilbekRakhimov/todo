import Joi from "joi";

export const createTaskSchema = Joi.object({
  name: Joi.string().required().min(2),
  isDone: Joi.string().default(false),
});
