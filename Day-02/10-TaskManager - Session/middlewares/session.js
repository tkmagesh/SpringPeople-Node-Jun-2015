var Guid = require('guid');

var sessionStore = {};

function exists(sessionId){
    return sessionStore.hasOwnProperty(sessionId);
}

function createNew(){
    var sessionId = Guid.raw();
    sessionStore[sessionId] = {};
    return sessionId;
}
var sessionId = null;
module.exports = function sessionMiddleware(req, res, next){
    //if the req contains a cookie 'sessionId';

    if (typeof req.cookies['sessionId'] === "undefined"){
        sessionId = createNew();
        res.cookie('sessionId', sessionId);
    } else {
        sessionId = req.cookies['sessionId'];
        if (!exists(sessionId)){
            sessionId = createNew();
            res.cookie('sessionId', sessionId);
        }
    }
    req.session = sessionStore[sessionId];
    next();
}

