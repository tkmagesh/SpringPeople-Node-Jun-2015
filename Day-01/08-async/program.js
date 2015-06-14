/*
Sync
*/

function f1(){
    console.log("f1 is invoked");
}
function f2(){
    console.log("f2 is invoked");
}
function f3(){
    console.log("f3 is invoked");
}
var fns = [f1, f2, f3];
function run(fns){
    for(var i=0; i<fns.length; i++){
        var fn = fns[i];
        fn();
    }
}

/* ********************************* */
function f1(next){
    console.log("f1 initiated");
    setTimeout(function(){
        console.log('f1 invoked');
        console.log("next is invoked -> ", next);
        next();
    },2000);
}

function f2(next){
    console.log("f2 initiated");
    setTimeout(function(){
        console.log('f2 invoked');
        console.log("next is invoked -> ", next);
        next();
    },2000);
}

function f3(next){
    console.log("f3 initiated");
    setTimeout(function(){
        console.log('f3 invoked');
        console.log("next is invoked -> ", next);
        next();
    },2000);
}



var fns = [f1, f2,  f3];

function run(fns){
    console.log('invoking run with ', fns);
    function action(fns){
        console.log('invoking action with ', fns);
        var first = fns[0],
            remaining = fns.slice(1),
            next = function next(){
                action(remaining);
            };
        if (typeof first === "function"){
            console.log("invoking first -> ", first, " with next -> ", next);
            first(next);
        }
    }
    action(fns);
}

        
