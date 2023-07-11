const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

// Route
const blogroute = require("./routes/blogroute");
app.use("/api/v1", blogroute);

//database
const dbconnect = require("./config/database");
dbconnect();

app.listen(PORT, () => {
  console.log(`Server has started at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>This is the HomePage</h1>");
});
