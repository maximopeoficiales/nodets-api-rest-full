import { Router } from "express";
import { UserRoutes } from "../controllers/user.controller";
const UserRouter = Router();

UserRouter.get("/", UserRoutes.getUsers);

export default UserRouter;
