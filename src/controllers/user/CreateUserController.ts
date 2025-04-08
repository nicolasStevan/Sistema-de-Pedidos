import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
// import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    // Call the service to create the user
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
        name,
        email,
        password
       });

    return res.json(user);
  }
}

export { CreateUserController };
