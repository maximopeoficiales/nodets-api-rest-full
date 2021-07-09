import { Router } from "express";
import { UserRoutes } from "../controllers/user.controller";
const UserRouter = Router();

UserRouter.get("/", UserRoutes.getUsers);
UserRouter.post("/", UserRoutes.postUser);

export default UserRouter;
