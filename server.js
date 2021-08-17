const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
require("dotenv").config();
require("./config/database");

const app = express();
//Middelwares
app.use(express.json());
app.use(cors());

app.use("/api", router);
app.listen(4000, () => console.log("Listening on port 4000"));
