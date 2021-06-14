import express from "express";
import bodyParser from "body-parser";
const server = express();

server.use(express.json());

export default server;
