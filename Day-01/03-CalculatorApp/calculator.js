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
    sign : function(n){
        return n < 0 ? -1 : (n > 0 ? 1 : 0);
    }
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
