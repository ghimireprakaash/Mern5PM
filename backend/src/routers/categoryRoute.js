import express from 'express';
import CategoryController from '../controller/CategoryController.js';

const catRoute = express.Router();
const catInstance = new CategoryController();

catRoute.get('/', catInstance.index);
catRoute.post('/', catInstance.store);
catRoute.get('/:id', catInstance.show);
catRoute.put('/:id', catInstance.update);
catRoute.delete('/:id', catInstance.destroy);


export default catRoute;