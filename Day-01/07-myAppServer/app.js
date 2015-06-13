var _processors = [];
module.exports = {
    use : function(processor){
        _processors.push(processor);
    },
    run : function(){
        return function(req, res){
            for(var i=0; i<_processors.length; i++){
                var processor = _processors[i];
                processor(req, res);
            }
        }
    }
}
