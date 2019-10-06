import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
