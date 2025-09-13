const autoBind = require("auto-bind");
const authService = require("./auth.service");
const AuthMessages = require("./auth.messages");
class AuthController {
  #service;
  constructor() {
    this.#service = authService;
    autoBind(this);
  }

  async sendOtp(req, res, next) {
    try {
      const { mobile } = req.body;
      const result = await this.#service.sendOtp(mobile);
      return res.status(200).json({
        status: 200,
        success: true,
        message: AuthMessages.sendOtpSuccessfully,
        data: result,
      });
    } catch (error) {
      next(error);
    }   
  }
}
module.exports = new AuthController();
