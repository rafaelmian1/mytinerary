const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/passport");
require("./config/database");

const router = require("./routes/index");
const adminRouter = require("./routes/adminRoutes");

const app = express();
//Middelwares
app.use(express.json());
app.use(cors());

app.use("/api", router);
app.use("/admin", adminRouter);
app.listen(process.env.PORT || 4000, process.env.HOST || "0.0.0.0", () =>
  console.log("Listening on port 4000")
);
