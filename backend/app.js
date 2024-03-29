const express = require("express");
const bodyParser = require("body-parser");

require("./db/mongoose");

const { List, Task } = require("./db/index");

const app = express();

const port = process.env.PORT || 3000;

//middleware's
app.use(bodyParser.json());

// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id"
  );

  res.header(
    "Access-Control-Expose-Headers",
    "x-access-token, x-refresh-token"
  );

  next();
});

//*
// api's
//*

// get all lists
app.get("/lists", (req, res) => {
  List.find({}).then((lists) => {
    res.send(lists);
  });
});

// create new list
app.post("/lists", (req, res) => {
  const title = req.body.title;
  let newList = new List({ title });
  newList.save().then((listDoc) => {
    res.send(listDoc);
  });
});

// update list from lists
app.patch("/lists/:id", (req, res) => {
  List.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then((listDoc) => {
    res.send(listDoc);
  });
});

// delete list form lists
app.delete("/lists/:id", (req, res) => {
  List.findOneAndRemove({ _id: req.params.id }).then((listDoc) => {
    Task.deleteMany({
      _listId: listDoc._id,
    }).then(() => {
      console.log("Tasks from " + listDoc._id + " were deleted!");
    });
    res.send(listDoc);
  });
});

// get tasks of list
app.get("/lists/:listId/tasks", (req, res) => {
  Task.find({ _listId: req.params.listId }).then((tasks) => {
    res.send(tasks);
  });
});

// create new task
app.post("/lists/:listId/tasks", (req, res) => {
  let newTask = new Task({
    description: req.body.description,
    _listId: req.params.listId,
  });
  newTask.save().then((taskDoc) => {
    res.send(taskDoc);
  });
});

// update task form tasks
app.patch("/lists/:listId/tasks/:id", (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.id, _listId: req.params.listId },
    {
      $set: req.body,
    }
  ).then((taskDoc) => {
    res.send(taskDoc);
  });
});

// delete list form lists
app.delete("/lists/:listId/tasks/:id", (req, res) => {
  Task.findOneAndRemove({
    _id: req.params.id,
    _listId: req.params.listId,
  }).then((listDoc) => {
    res.send(listDoc);
  });
});

//*
// end of api's
//*

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
