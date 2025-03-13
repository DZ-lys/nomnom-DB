import express from "express";
import {
  createFoodCategory,
  getFoodCategories,
} from "../controllers/food-category.controllers";

const route = express.Router();

route.post("/", createFoodCategory);
route.get("/", getFoodCategories);

export default route;
