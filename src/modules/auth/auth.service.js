const autoBind = require('auto-bind');

class AuthService {
    
    constructor(){
        autoBind(this);
    }

    async sendOtp() {
        
    }
}

module.exports = new AuthService();