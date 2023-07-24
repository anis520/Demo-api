import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import AuthRoutes from "./routes/AuthRoutes.js";

import cookieParser from "cookie-parser";
import mongoDBConnect from "./config/database.js";
import cors from "cors";

dotenv.config();

const app = express();

// set middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// environment vars
const PORT = process.env.PORT || 5050;

app.use(cookieParser());
app.use("/api/v1", AuthRoutes);

app.listen(PORT, () => {
  console.log(`server was running on port ${PORT}`.bgBlue);
  mongoDBConnect();
});
