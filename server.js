//PATHS REQUIRED
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const uuidv1 = require("uuidv1");

//ROUTES REQUIRED
const apiRoute = require("./routes/apiroutes");
const htmlRoute = require("./routes/htmlroutes");

//PORT ROUTE
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/api", apiRoute);
app.use("/", htmlRoute);
app.listen(PORT, function () {
  console.log("Listening on PORT" + PORT);
});
