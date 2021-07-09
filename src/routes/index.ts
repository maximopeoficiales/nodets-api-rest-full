import express from "express";
import UserRouter from "./user.routes";
const appRoutes = express();

appRoutes.use("/users", UserRouter);




export default appRoutes;
