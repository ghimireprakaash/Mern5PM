import express from "express";
import UserController from "../controller/UserController.js";

const webRouter = express.Router();
const userInstance = new UserController();

webRouter.get("/", userInstance.index);

webRouter.get("/users", (req, res) => {
  res.send("Hello Users");
});

export default webRouter;