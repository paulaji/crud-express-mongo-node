const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 6969;

app.get("/", (req, res) => {
  res.send("this is a CRUD app");
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
