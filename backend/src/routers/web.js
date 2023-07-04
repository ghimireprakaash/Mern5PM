import express from "express";
import UserController from "../controller/UserController.js";

const webRouter = express.Router();
const userInstance = new UserController();

// webRouter.get("/", userInstance.index);
webRouter.get("/", (req, res)=>{
  console.log('Hello Users...');
});

/*
===================== Start User Routes=====================
*/

webRouter.post('/register', userInstance.store());

/*
===================== End User Routes=====================
*/

webRouter.get("/users", (req, res) => {
  res.send("Hello Users");
});

export default webRouter;