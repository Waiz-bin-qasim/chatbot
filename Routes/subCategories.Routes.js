import { Router } from "express";
import {
  addSubCategories,
  deleteSubCategories,
  getSubCategories,
  updateSubCategories,
} from "../Controller/subCategory.Controller.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const subCategoryRoute = new Router();

// Add subCategoryRoute
subCategoryRoute.get("/", getSubCategories);
subCategoryRoute.post("/:category_id/", addSubCategories);
subCategoryRoute.put("/:subcategory_id", updateSubCategories);
subCategoryRoute.delete("/:subcategory_id", deleteSubCategories);

export default subCategoryRoute;
