import { Request, Response } from "express";
import UserModel, { IUser } from "../models/user.model";

class UserController {
  public async getUsers(req: Request, res: Response): Promise<Response> {
    // const photos = await PhotoModel.find();
    return res.json({ data: "aqui los usuarios" });
  }
  public async postUser(req: Request, res: Response): Promise<Response> {
    // const photos = await PhotoModel.find();
    const user = new UserModel(req.body);
    try {
      let userNew = await user.save();
      return res.json({
        ok: true,
        user: userNew,
      });
    } catch (error) {
      return res.status(400).json({
        ok: false,
        error,
      });
    }
  }
}

export const UserRoutes = new UserController();
