import jwt from "jsonwebtoken";

class Auth {
  static check(new_token) {
    let key = process.env.JWT_SECRET;
    let token = new_token.split(" ")[1];
    let result = false;
    try {
      result = jwt.verify(token, key);
      return result;
    } catch (err) {
      return false;
    }
  }
}

export default Auth;
