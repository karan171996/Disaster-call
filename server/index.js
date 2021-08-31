import app from "./config/server";
import userDetailRouter from "./src/routes/userDetails";
import locationRouter from "./src/routes/fetchPlaces";
import departmentDataRouter from "./src/routes/departments";

import db from "./config/database";
import { server } from "./config/socket";

db.on("error", (err) => {
  console.log("err", err);
});
db.once("open", (err, res) => {
  console.log("mongoose is connected");
});

app.use("/department", departmentDataRouter);
app.use("/userDetails", userDetailRouter);
app.use("/", locationRouter);

const PORT = process.env.PORT || 3030;
server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
