import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectMongoDb } from "./data-base/mongo-db";
import categoryRoute from "./routes/food-category.route";

configDotenv();
connectMongoDb();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use("/addCategory", categoryRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
