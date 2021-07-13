import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();
const server = express();

server.use(express.json());
server.use(helmet());
export default server;
