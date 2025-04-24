import mongoose, { Schema } from "mongoose";

type DishDetailsSchemaType = {
  foodName: String;
  price: Number;
  image: String;
  ingredients: String;
  category: Schema.Types.ObjectId;
};

const DishDetailsSchema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "foodcategories",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<DishDetailsSchemaType>(
  "foods",
  DishDetailsSchema
);
