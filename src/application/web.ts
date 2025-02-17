import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { publicRouter } from "../routes/public-api";
import { apiRouter } from "../routes/api";

dotenv.config();
export const web = express();
web.use(express.json());
web.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
    },
    credentials: true,
  })
);
web.use(cookieParser());

web.use(publicRouter);
web.use(apiRouter);
// web.use(errorMiddleware);
