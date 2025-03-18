import { Request, Response } from "express";
import dishDetailsModels from "../models/dish-details.models";

export const createDishDetails = async (req: Request, res: Response) => {
  try {
    const dishDetails = req.body;
    const newDish = await dishDetailsModels.create(dishDetails);
    res.status(200).json({ message: "created new dish", newDish });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "unable to create new dish", error });
  }
};

export const getDishDetails = async (_: Request, res: Response) => {
  try {
    const dishes = await dishDetailsModels.find().populate("category");
    res.status(200).json({ message: "got the dishes", dishes });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "couldn't get dish", error });
  }
};
