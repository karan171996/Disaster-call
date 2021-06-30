import server from "./config/server";
import userDetailRouter from "./src/routes/userDetails";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/disaster-call", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

server.use("/userDetails", userDetailRouter);
const PORT = process.env.PORT || 3030;
server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
