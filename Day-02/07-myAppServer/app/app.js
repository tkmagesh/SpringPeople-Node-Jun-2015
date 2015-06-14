var _processors = [];
/*
module.exports = {
    use : function(processor){
        _processors.push(processor);
    },
    run : function(){
        return function(req, res){
            function action(req, res, processors){
                var first = processors[0];
                var remaining = processors.slice(1);
                var next = function(){
                    if (remaining.length <= 0) return;
                    action(req, res, remaining);
                };
                first(req, res, next);
            }
            action(req, res, _processors);
        }
    }
}
*/

var app = function(req, res){
    function action(req, res, processors){
        var first = processors[0];
        var remaining = processors.slice(1);
        var next = function(){
            if (remaining.length <= 0) return;
            action(req, res, remaining);
        };
        first(req, res, next);
    }
    action(req, res, _processors);
};
app.use = function(processor){
    _processors.push(processor);
};
module.exports = app;
