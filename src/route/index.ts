import { Router } from "express";
import { UserController } from "../controller/UserController";
import { PostController } from "../controller/PostController";

const routes = Router()
const userController = new UserController()
const postController = new PostController()

routes.get("/user", userController.list.bind(userController))
routes.post("/user", userController.create.bind(userController))
routes.post("/post", postController.create.bind(postController))

export default routes