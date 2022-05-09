import { Router } from "express";
import CategoriesController from "../controllers/categories.controller";

const categoriesRouter = Router();

const categoriesController = new CategoriesController();

categoriesRouter.post("", categoriesController.store);
categoriesRouter.get("", categoriesController.index);

export default categoriesRouter;
