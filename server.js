const express = require("express");
const mysql = require("mysql");
const handlebars = require("express-handlebars");
const fs = require("fs");

// const { writeFileSync } = require("node:fs");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.set("view engine", "handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));

// app.get("/", (req, res) => {
//   res.render("main", { layout: "index" });
// });

require("./controllers/burgers_controller")(app);

app.listen(PORT, (req, res) => {
  console.log(`server is running `, PORT);
});
