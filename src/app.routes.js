const router = require('express').Router();
const AuthRouter = require('./modules/auth/auth.router');

router.use('/auth',AuthRouter);


module.exports = {
    mainRouter : router
}