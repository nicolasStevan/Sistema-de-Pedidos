import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";

import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";

const router = Router();// criando as rotas do sistema

//routes upload --
const upload = multer(uploadConfig.upload("./tmp")); // configurando o multer para salvar os arquivos na pasta tmp

//routes user ---

router.post("/users", new CreateUserController().handle); // criar usuario

router.post("/login", new AuthUserController().handle); // login

router.get("/me", isAuthenticated, new DetailUserController().handle); // detalhes do usuario logado

//- ROTAS CATEGORY
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
); // criar categoria

router.get("/category", isAuthenticated, new ListCategoryController().handle); // listar categorias

//-- ROTAS PRODUCT
router.post("/product",isAuthenticated,upload.single("banner"),new CreateProductController().handle); // criar produto
router.get("/category/product",isAuthenticated,new ListByCategoryController().handle); // listar produtos por categoria

//-- ROTAS ORDER

router.post("/order", isAuthenticated, new CreateOrderController().handle); //  criar pedido

router.delete("/order", isAuthenticated, new RemoveOrderController().handle); // remover pedido

//-- ROTAS ITEM
router.post("/order/add", isAuthenticated, new AddItemController().handle); // adicionar item

router.delete("/order/remove", isAuthenticated, new RemoveItemController().handle); // remover item

export { router };
