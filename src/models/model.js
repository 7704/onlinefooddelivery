const mongoose = require("mongoose");

const mongooseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  order: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const mySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  message: {
    type: String,
  },
});

const Contact = new mongoose.model("Contact", mySchema);
const Foodie = new mongoose.model("Foodie", mongooseSchema);

module.exports = Foodie;
module.exports = Contact;
