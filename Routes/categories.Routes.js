import { Router } from "express";
import {
  addCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../Controller/category.Controller.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const categoriesRoutes = new Router();

// Add categoriesRoutes
categoriesRoutes.get("/", getCategory);
categoriesRoutes.post("/", addCategory);
categoriesRoutes.put("/:category_id", updateCategory);
categoriesRoutes.delete("/:category_id", deleteCategory);

export default categoriesRoutes;
