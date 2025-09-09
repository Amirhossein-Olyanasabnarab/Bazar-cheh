const autoBind = require('auto-bind');
const authService = require('./auth.service');
class AuthController {
    #service;
    constructor() {
        this.#service = authService;
        autoBind(this);
    }
}
module.exports = new AuthController(); 