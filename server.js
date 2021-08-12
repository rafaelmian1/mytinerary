const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/index");
require("dotenv").config();

//Middelwares
app.use(express.json());
app.use(cors());

app.use("/api", router);
app.listen(4000, () => console.log("Listening on port 4000"));
