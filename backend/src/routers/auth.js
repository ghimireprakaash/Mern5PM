import express from "express";
import AuthController from "../controller/AuthController.js";

let AuthInstance = new AuthController();
let authRoute = express.Router();

authRoute.post("/", AuthInstance.login);
authRoute.get("/valid-token", AuthInstance.checkToken);

export default authRoute;
