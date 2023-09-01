import User from "../models/User.js";
import Auth from "../middleware/Auth.js";

class AuthController {
  async login(req, res) {
    let email = req.body.email;
    let user = await User.findOne({ email: email });
    if (user) {
      let password = req.body.password;
      if (user.checkPassword(password)) {
        let token = user.generateToken();
        res.status(200).json({
          message: "Login Success",
          token: token,
          userId: user.id,
        });
      } else {
        res.status(200).json({ message: "Password not matched!!!" });
      }
    } else {
      res.status(200).json({ message: "User not found!!!" });
    }
  }

  async checkToken(req, res) {
    let token = req.headers.authorization;
    let user = Auth.check(token);
    if (user) {
      res.status(200).json({ isLogin: true, user: user });
    } else {
      res.status(200).json({ isLogin: false });
    }
  }
}

export default AuthController;
