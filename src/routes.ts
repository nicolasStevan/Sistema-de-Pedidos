import { Router } from "express";

const router = Router();

import { CreateUserController } from "./controllers/user/CreateUserController";


// Define a route para criar o user
router.post('/users', new CreateUserController().handle);

export { router };