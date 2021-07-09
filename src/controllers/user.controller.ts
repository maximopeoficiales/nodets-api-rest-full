import { Request, Response } from "express";

class UserController {
  public async getUsers(req: Request, res: Response): Promise<Response> {
    // const photos = await PhotoModel.find();
    return res.json({ data: "aqui los usuarios" });
  }
}

export const UserRoutes = new UserController();
