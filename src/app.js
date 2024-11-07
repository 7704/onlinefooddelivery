const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
require("./db/connect");
const Foodie = require("./models/model");
const Contact = require("./models/model");

const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/checkout", (req, res) => {
  res.render("checkout");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/checkout", async (req, res) => {
  try {
    const newFoodie = new Foodie({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      order: req.body.order,
      address: req.body.address,
    });

    const score = await newFoodie.save();
    res.status(201).send("Order saved to database");
  } catch (err) {
    // console.log(err);
    res.status(400).send("error coming");
  }
});

app.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });
    // console.log(name);
    const myscore = await newContact.save();
    res.status(201).send("Order saved to database");
  } catch (err) {
    // console.log(err);
    res.status(400).send("error coming");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
