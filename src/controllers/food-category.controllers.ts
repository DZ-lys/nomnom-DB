import { Request, Response } from "express";
import foodCategoryModels from "../models/food-category.models";

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const newCategory = await foodCategoryModels.create(categoryData);
    res.status(200).json({ message: "created new category", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategoty", error });
  }
};
