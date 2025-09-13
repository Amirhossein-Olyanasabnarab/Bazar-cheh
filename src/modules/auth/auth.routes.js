const authController = require("./auth.controller");

const router = require("express").Router();

router.post("/send-otp", authController.sendOtp)

module.exports = {
    AuthRouter : router
};