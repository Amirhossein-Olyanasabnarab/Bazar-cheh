const autoBind = require('auto-bind');
const UserModel = require('../user/user.model');
const createHttpError = require('http-errors');
const AuthMessages = require('./auth.messages');
class AuthService {
    #model;
    constructor(){
        autoBind(this);
        this.#model = UserModel
    }

    async sendOtp(mobile) {
         
    }

    async checkExistByMobile(mobile){
        const user = await UserModel.findOne({mobile});
        if(!user) throw new createHttpError(AuthMessages.NotFound);
        return user;
    }
}

module.exports = new AuthService();