var express = require('express');
var router = express.Router();
var taskRespository = require('../services/taskRepository');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('tasks/index', {list : taskRespository.getAll()});
});

router.get('/new', function(req, res, next) {
    res.render('tasks/new');
});

router.post('/new', function(req, res, next) {
    taskRespository.add(req.body.newTask, function(){
        res.redirect('/tasks')
    });
});

router.get('/toggle/:id', function(req, res, next){
    var taskId = parseInt(req.params.id, 10);
    taskRespository.toggle(taskId);
    res.redirect('/tasks');
});

router.get('/removeCompleted', function(req, res, next){
    var completedTasks = taskRespository.getCompletedTasks();
    var completedIds = completedTasks.reduce(function(result,task){
        return result + task.id + ',';
    },'');
    res.render('tasks/confirmCompleted',{list : completedTasks, completedIds : completedIds});
});

router.post('/removeCompleted', function(req, res, next){
    taskRespository.removeCompleted();
    res.redirect('/tasks');
});
module.exports = router;
