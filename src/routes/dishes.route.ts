import express from "express";
import {
  createDishDetails,
  getDishDetails,
} from "../controllers/dish.controller";

const route1 = express.Router();

route1.post("/", createDishDetails);
route1.get("/", getDishDetails);

export default route1;
