import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { router } from "./routes/routes.js";
dotenv.config();

// new instance
const { PORT, MONGOURL } = process.env;
const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/chat", router);

// mongoose
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log(`Server is connected to MONGODB`);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => console.log(`MESSAGE: ${err}`));
