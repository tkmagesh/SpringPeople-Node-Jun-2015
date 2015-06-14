
/*module.exports = function(){
    var _result = 0;
    return {
        add : function(number){
            _result += number;
        },
        subtract : function(number){
            _result -= number;
        },
        getResult : function(){
            return _result;
        }
    }
}*/
function Calculator(){
    var result = 0;
    this.add = function(number){
        result += number;
    };
    this.subtract = function(number){
        result -= number;
    };
    this.getResult = function(){
        return result;
    }
};
module.exports = Calculator;
