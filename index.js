const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const router = express.Router();
const allRoutes = require("./routes/student-routes");
const mongoUri = "mongodb://localhost:27017/juspay";
mongoose
  .connect(mongoUri)
  .then(() => console.log("Connected to Mongo Server"))
  .catch(() => console.log("Cannot Connect To Mongo Server"));

app.use(cors());
app.use("/api", allRoutes);

const port = 5000 || process.env.port;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
