import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateProductController } from "./controllers/product/CreateProductController";

import uploadConfig from "./config/multer";

const router = Router();

//routes upload --
const upload = multer(uploadConfig.upload("./tmp"));

  //routes user ---

router.post("/users", new CreateUserController().handle)


router.post("/login", new AuthUserController().handle);

router.get("/me", new DetailUserController().handle);

//- ROTAS CATEGORY
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

//-- ROTAS PRODUCT
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);

export { router };
