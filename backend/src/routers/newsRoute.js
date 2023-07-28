import express from 'express';
import NewsController from '../controller/NewsController.js';
import FileUploads from '../config/FileUploads.js';


const newsRoute = express.Router();
const newsInstance = new NewsController();

const newsImageInstance = new FileUploads();
const fileUploads = newsImageInstance.fileUpload('/news');

newsRoute.get('/', newsInstance.index);
newsRoute.post('/', fileUploads.single('image'), newsInstance.store);
newsRoute.get('/:id', newsInstance.show);
newsRoute.put('/:id', fileUploads.single('image'), newsInstance.update);
newsRoute.delete('/:id', newsInstance.destroy);


export default newsRoute;