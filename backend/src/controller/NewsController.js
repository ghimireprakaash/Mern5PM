import News from "../models/News.js";
import checkFileExistsSync from '../config/fileHelper.js'

class NewsController{
    async index(req, res){
        try {
            let news = await News.find({}).populate('categoryId').populate('userId');

            return res.json(news);
        } catch (error) {
            console.log(error);
        }
    }


    async store(req, res){
        try {
            let image = '';
            if(req.file){
                image = req.file.filename;
            }
            const postNews = await News.create({...req.body, image});
            return res.json(postNews);
        } catch (error) {
            console.log(error);
        }
    }

    async show(req, res){
        let newsId = req.params.id;
        try {
            let showNews = await News.findById(newsId);

            return res.json(showNews);
        } catch (error) {
            console.log(error);
        }
    }

    async update(req, res){
        let newsId = req.params.id;
        try {
            const getNews = await News.findById(newsId);
            let image = getNews.image;
            if(req.file){
                let fileName = getNews.image;
                let filePath = `public/news/${fileName}`;
                let fileResponse = checkFileExistsSync(filePath);

                if(fileResponse){
                    fs.unlinkSync(filePath);
                    image = req.file.filename;
                }
                image = req.file.filename;
            }

            await getNews.updateOne({...req.body, image})
            return res.json(getNews);
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(req, res){
        let newsId = req.params.id;
        try {
            let news = await News.findById(newsId);
            if(news){
                let fileDelete = true;
                let newsImage = news.image;
                if(newsImage){
                    let filePath = `public/news/${newsImage}`;
                    let fileResponse = checkFileExistsSync(filePath);
                    
                    if(fileResponse){
                        fs.unlinkSync(filePath);
                    }
                    fileDelete = true; 
                }
                news.deleteOne();
                return res.json({message: 'News deleted'});

            }else{
                return res.json({message: 'No news found.'});
            }
        } catch (error) {
            console.log(error);
        }
    }
}


export default NewsController;