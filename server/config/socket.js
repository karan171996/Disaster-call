import app from "./server";

export const server = require("http").createServer(app);

export const io = require("socket.io")(server, {
  cors: true,
  origins: ["localhost:3000"],
});
