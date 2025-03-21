import express from "express";
import {
  createDishDetails,
  getDishDetails,
} from "../controllers/dish.controller";

const route = express.Router();

route.post("/", createDishDetails);
route.get("/", getDishDetails);

export default route;
