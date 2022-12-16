const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  _listId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "List",
  },
  completed: {
    type: Boolean,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
