const express = require("express");
const app = express();

app.listen(4000);
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

app.post("/", (req, res) => {
  console.log(req);
  const name = req.body.name; // Get name from query parameters

  res.send(`You cant see me!, ${name}`);
});
