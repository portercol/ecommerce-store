const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
// app.get("/api/test", () => {
//   console.log("test is successful");
// });

app.use("/api/users", userRoute);

app.listen(process.env.PORT || 3001, () => {
  console.log("Backend server is running!");
});
