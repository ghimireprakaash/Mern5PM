export default function RouteMiddleware(req, res, next) {
  let token = req.headers.authorization;
  if (token) {
    token = token.split(" ")[1];
    if (token) {
      return next();
    }
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
}
