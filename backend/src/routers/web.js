import express from "express";
import userRouter from "./userRoute.js";
import catRoute from "./categoryRoute.js";
import newsRoute from './newsRoute.js';


const webRouter = express.Router();

webRouter.use('/user', userRouter);
webRouter.use('/category', catRoute);
webRouter.use('/news', newsRoute);


export default webRouter;