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


app.get('/data', (req,res) => {

	oData = tasks;
	console.log(tasks);
	res.json( oData );

})

app.post('/data', (req,res) => {
	var taskName = req.body.description;
	const newTask = {
      "id": count++,
      "description": taskName,
      "done": "false"
  }
	tasks.push(newTask);
	res.sendStatus(200)
})

app.listen(3000, () =>  console.log("Listening on port 3000...."))