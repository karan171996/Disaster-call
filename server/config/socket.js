import app from "./server";

export const server = require("http").createServer(app);

export const io = require("socket.io")(server, {
  allowUpgrades: true,
  transports: ["polling", "websocket"],

  cors: true,
  origins: ["localhost:3000/department/random"],
});
