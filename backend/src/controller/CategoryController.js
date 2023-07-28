import Category from "../models/Category.js";

class CategoryController{
    async index(req, res){
        try {
            let category = await Category.find({});

            return res.json(category);
        } catch (error) {
            console.log(error);
        }
    }


    async store(req, res){
        try {
            let category = await Category.create(req.body);
            
            return res.json(category);
        } catch (error) {
            console.log(error);
        }
    }


    async show(req, res){
        let catId = req.params.id;
        try {
            let getCat = await Category.findById(catId);

            return res.json(getCat);
        } catch (error) {
            console.log(error);
        }
    }


    async update(req, res){
        let catId = req.params.id;
        try {
            let getCat = await Category.findById(catId);
            getCat.updateOne({...req.body});

            return res.json({message: 'Category updated.'});
        } catch (error) {
            console.log(error);
        }
    }


    async destroy(req, res){
        let catId = req.params.id;
        try {    
            let getCat = await Category.findById(catId);

            getCat.deleteOne(catId);
            return res.json({message: 'Category deleted.'})
        } catch (error) {
            console.log(error);
        }
    }
}


export default CategoryController;