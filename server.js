const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/passport");
require("./config/database");
const path = require("path");

const router = require("./routes/index");
const adminRouter = require("./routes/adminRoutes");

const app = express();
//Middelwares
app.use(express.json());
app.use(cors());

app.use("/api", router);
app.use("/admin", adminRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}
app.listen(process.env.PORT || 4000, process.env.HOST || "0.0.0.0", () =>
  console.log("Listening on port 4000")
);
