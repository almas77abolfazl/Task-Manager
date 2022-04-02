const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/TaskManager", {
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
