import server from "./config/server";
import userDetailRouter from "./src/routes/userDetails";
import db from "./config/database";

db.on("error", (err) => {
  console.log("err", err);
});
db.once("open", (err, res) => {
  console.log("mongoose is connected");
});

server.use("/userDetails", userDetailRouter);
const PORT = process.env.PORT || 3030;
server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
