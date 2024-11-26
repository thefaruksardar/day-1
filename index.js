const express = require("express");
const app = express();

app.listen(4000);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET

app.get("/", (req, res) => {
  //   res.send("hello");
  res.send(`<h1 style="color:red;">How are you?</h1>`);
});

app.get("/about", (req, res) => {
  res.send("Its me Faruk");
});

// POST
app.post("/name", (req, res) => {
  // console.log(req.body.name);
  const name = req.body.name;

  res.send(`My name is ${name}`);
});
