import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());
server.use(helmet());
export default server;
