var express = require('express');
var router = express.Router();

var taskList = [
    {id : 1, name : "Watch a movie", isCompleted : false},
    {id : 2, name : "Plan for dinner", isCompleted : false},
    {id : 3, name : "Fix the bug", isCompleted : false},
    {id : 4, name : "Create a bug", isCompleted : false},
];

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('tasks/index', {list : taskList});
});

router.get('/new', function(req, res, next) {
    res.render('tasks/new');
});

router.post('/new', function(req, res, next) {
    var nextId = taskList.reduce(function(result, task){
        return result > task.id ? result : task.id;
    }, 0) + 1;
    var newTask = {id : nextId, name : req.body.newTask, isCompleted : false};
    taskList.push(newTask);
    res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
    console.log(req.params);
    var taskId = parseInt(req.params.id, 10);
    var task = taskList.filter(function(task){
        return task.id === taskId;
    })[0];
    console.log(task);
    task.isCompleted = !task.isCompleted;
    res.redirect('/tasks');
});

module.exports = router;
