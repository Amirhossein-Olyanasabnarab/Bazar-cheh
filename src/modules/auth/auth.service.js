const autoBind = require('auto-bind');

class AuthService {
    
    constructor(){
        autoBind(this);
    }
}

module.exports = new AuthService();