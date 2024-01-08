import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import routes from "./routes/routes.js";

const app = express();
config();

app.use(cookieParser());

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,PUT,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

app.use(cors(corsOptions));

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_CONNECTION_STRING);
    // @ts-ignore
    const db = await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log(`mongodb connected ${db.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
connectDB();

app.use(routes);

app.listen(8000, () => {
  console.log(`Server is running on PORT ${8000}`);
});
