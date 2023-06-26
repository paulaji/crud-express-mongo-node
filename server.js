const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("this is a CRUD app");
});

app.listen(6969, () => {
  console.log(`server listening on port ${6969}`);
});
