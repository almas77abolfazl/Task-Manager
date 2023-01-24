const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/TaskManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("> Connected To MongoDb..."))
  .catch((err) =>
    console.log(`> Error while connecting to mongoDB : ${err.message}`)
  );

module.exports = {
  mongoose,
};
