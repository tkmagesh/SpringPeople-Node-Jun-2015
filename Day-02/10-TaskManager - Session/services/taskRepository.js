var initialList = [
    {id : 1, name : "Watch a movie", isCompleted : false},
    {id : 2, name : "Plan for dinner", isCompleted : false},
    {id : 3, name : "Fix the bug", isCompleted : false},
    {id : 4, name : "Create a bug", isCompleted : false},
];

module.exports = function(req){
    if (!req.session.taskList){
        req.session.taskList = initialList.slice(0);
    }
    var taskList = req.session.taskList;
    return {
        getAll : function(){
            return taskList.slice(0);
        },
        add : function(newTaskName, onComplete){
            setImmediate(function(){
                var nextId = taskList.reduce(function(result, task){
                    return result > task.id ? result : task.id;
                }, 0) + 1;
                var newTask = {id : nextId, name : newTaskName, isCompleted : false};
                taskList.push(newTask);
                onComplete();
             });
        },
        toggle : function(taskId){
            var task = taskList.filter(function(task){
                return task.id === taskId;
            })[0];
            task.isCompleted = !task.isCompleted;
        },
        getCompletedTasks : function(){
            return taskList.filter(function(task){
                return task.isCompleted;
            });
        },
        removeCompleted : function(){
            for(var i=taskList.length-1; i>=0; i--){
                if (taskList[i].isCompleted)
                    taskList.splice(i,1);
            }
        }
    }
}
