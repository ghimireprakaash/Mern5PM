import express from 'express';
import UserController  from '../controller/UserController.js';
import FileUploads from '../config/FileUploads.js';
import RouteMiddleware from '../middleware/RouteMiddleware.js';


const userRouter = express.Router();

const userInstance = new UserController();
const userImageInstance = new FileUploads();
const fileUploads = userImageInstance.fileUpload('/users');


userRouter.get('/', RouteMiddleware, userInstance.index);
userRouter.post('/', fileUploads.single('image'), userInstance.store);
userRouter.get('/:id', userInstance.show);
userRouter.put('/:id', RouteMiddleware, fileUploads.single('image'), userInstance.update);
userRouter.delete('/:id', RouteMiddleware, userInstance.destroy);



export default userRouter;
