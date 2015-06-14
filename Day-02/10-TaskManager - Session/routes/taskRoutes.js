var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('tasks/index', {list : req.taskRepository.getAll()});
});

router.get('/new', function(req, res, next) {
    res.render('tasks/new');
});

router.post('/new', function(req, res, next) {
    req.taskRepository.add(req.body.newTask, function(){
        res.redirect('/tasks')
    });
});

router.get('/toggle/:id', function(req, res, next){
    var taskId = parseInt(req.params.id, 10);
    req.taskRepository.toggle(taskId);
    res.redirect('/tasks');
});

router.get('/removeCompleted', function(req, res, next){
    var completedTasks = req.taskRepository.getCompletedTasks();
    var completedIds = completedTasks.reduce(function(result,task){
        return result + task.id + ',';
    },'');
    res.render('tasks/confirmCompleted',{list : completedTasks, completedIds : completedIds});
});

router.post('/removeCompleted', function(req, res, next){
    req.taskRepository.removeCompleted();
    res.redirect('/tasks');
});
module.exports = router;
