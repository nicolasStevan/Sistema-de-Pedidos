import { Router } from "express";
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController'

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// -- Rotas User --
router.post("/users", new CreateUserController().handle);

router.post("/login", new AuthUserController().handle);

router.get('/me',new DetailUserController().handle)


// rotas category 
router.post('/category', isAuthenticated, new CreateCategoryController().handle)


export { router };
