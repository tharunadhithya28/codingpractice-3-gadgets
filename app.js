const express = require("express");
const app = express();

app.get("/gadgets", (request, response) => {
  app.listen(3000, () => {
    console.log("Running");
  });
  response.sendFile("./gadgets.html", { root: __dirname });
});

module.exports = app;
