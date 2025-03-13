import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectMongoDb } from "./data-base/mongo-db";
import categoryRoute from "./routes/food-category.route";
import cors from "cors";

configDotenv();
connectMongoDb();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.use("/addCategory", categoryRoute);

app.get("/");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
