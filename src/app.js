const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = 80;
const publicPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
// console.log(templatePath);
app.set("views", templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));

app.set("view engine", "hbs");
app.get("", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error");
});
app.listen(port, () => {
  console.log(`The app is running at port ${port}`);
});
