import { Router } from "express";
import ProductsController from "../controllers/products.controller";

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post("", productsController.store);
productsRouter.get("", productsController.index);
productsRouter.get("/:id", productsController.show);
productsRouter.patch("/:id", productsController.update);
productsRouter.delete("/:id", productsController.delete);
productsRouter.get("/category/:id", productsController.prodByCat);

export default productsRouter;
