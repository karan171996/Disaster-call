import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/disaster-call", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
