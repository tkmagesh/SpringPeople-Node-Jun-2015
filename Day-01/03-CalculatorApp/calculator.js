console.log('calculator.js is loaded');
var calculator = {
    add : function(x,y){
        return x + y;
    },
    subtract : function(x,y){
        return x - y;
    },
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x / y;
    },
};

var scientificCalculator = {
    sqrt : function(){
        console.log("I will do it later");
    }
}

module.exports = {
    calculator : calculator,
    sciCalculator : scientificCalculator
};
