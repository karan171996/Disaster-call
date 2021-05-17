const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIO = require("socket.io");
const PORT = 3030;
const NEW_MESSAGE_EVENT = "new-message-event";

const app = express();
const server = http.createServer();
const io = socketIO(server, {
  cors: true,
  origins: ["localhost:3000"],
});
app.use(cors());

io.on("connection", (socket) => {
  socket.emit("announcement", { message: "An new User Join" });
  socket.on("disconnect", () => {
    console.log("client diconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
