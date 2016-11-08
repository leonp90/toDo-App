var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

// const dataPath = path.join(__dirname, 'data/tasks.json')


var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

var count= 0;
let tasks = []

// Client
app.get('/tasks', (req,res) => {
  let enabledTasks = tasks.filter((task) => {
    return task.status === true;
  });

  res.json(enabledTasks);
});


app.get('/data', (req,res) => {
	oData = tasks;
	console.log(tasks);
	res.json( oData );
});

app.post('/', (req,res) => {
  console.log('asdasdasd');
	var taskName = req.body.description;
	const newTask = {
      "id": count++,
      "description": taskName,
      "done": "false"
  };

	tasks.push(newTask);
	res.sendFile(`${__dirname}/public/index.html`);
});

//
app.delete('/data/:id', (req, res) => {
  tasks = tasks.filter((task) => {
    return task.id !== parseInt(req.params.id);
  });

  console.log(tasks);
  res.json(tasks);
});

app.listen(3000, () =>  console.log("Listening on port 3000...."));
