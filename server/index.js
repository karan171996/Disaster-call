import app from "./config/server";
import userDetailRouter from "./src/routes/userDetails";
import locationRouter from "./src/routes/fetchPlaces";
import departmentDataRouter from "./src/routes/departments";

import db from "./config/database";
import { server } from "./config/socket";

import { io } from "./config/socket";

import UserDetailModal from "./src/models/UserDetail";

db.on("error", (err) => {
  console.log("err", err);
});
db.once("open", (err, res) => {
  console.log("mongoose is connected");
});
let interval;
io.on("connection", (socket) => {
  console.log("Connection Established!!!");
  socket.on("departmentName", (department) => {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => {
      UserDetailModal.find({
        department,
      })
        .then((item) => {
          socket.emit("department", item);
        })
        .catch((err) => console.log(err));
    }, 40000);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

app.use("/userDetails", userDetailRouter);
app.use("/department", departmentDataRouter);
app.use("/", locationRouter);

const PORT = process.env.PORT || 3030;
server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
