const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

// Connect to MongoDB Atlas
// "mongodb+srv://shu7704:shubham%40987654321@cluster0.rbmwn35.mongodb.net/online-food?retryWrites=true&w=majority"
mongoose
  .connect("mongodb://127.0.0.1:27017/onlinefood", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log(err));
