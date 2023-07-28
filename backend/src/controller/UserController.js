import checkFileExistsSync from '../config/fileHelper.js';
import User from '../models/User.js';
import fs from 'fs';

class UserController{
    async index(req, res){
        try{
            let users = await User.find({});
            return res.json(users);
        }catch(err){
            console.log(err);
        }
    }


    async store(req, res){
        try{
            let image = '';
            if(req.file){
                image = req.file.filename;
            }
            // const user = await User.create(req.body);
            const user = await User.create({...req.body, image});
            return res.json(user);
        }catch(err){
            console.log(err);
        }
    }


    async show(req, res){
        let id = req.params.id;
        try{
            let findUser = await User.findById(id);
            return res.json(findUser);
        }catch(err){
            console.log(err);
        }
    }


    async update(req, res){
        let id = req.params.id;
        try {
            const user = await User.findById(id);
            let image = user.image;
            if(req.file){
                let fileName = user.image;
                let filePath = `public/users/${fileName}`;
                let fileResponse = checkFileExistsSync(filePath);

                if(fileResponse){
                    fs.unlinkSync(filePath);
                    image = req.file.filename;
                }
                image = req.file.filename;
            }

            await user.updateOne({...req.body, image})
            return res.json(user);
        } catch (err) {
            console.log(err);
        }
    }

    // async update(req, res){
    //     let id = req.params.id;
    //     try{
    //         let getUserData = await User.findById(id);
    //         if(getUserData){
    //             let imageDelete = true;

    //             let getUserImage = getUserData.image;

    //             if(getUserImage){
    //                 let imagePath = `public/users/${getUserImage}`;
    //                 let fileResponse = checkFileExistsSync(imagePath);

    //                 // console.log(fileResponse);
    //                 if(fileResponse){
    //                     fs.unlinkSync(imagePath);
    //                 }
                    
    //                 imageDelete = true;
    //             }

    //             await getUserData.updateOne({...req.body, getUserImage});
                
    //             // return res.json({message: 'User Updated Successfully.'});
    //             return res.json(getUserData);
    //         } else{
    //             return res.json({message: 'Update failed.'});
    //         }
    //     }catch(err){
    //         console.log(err);
    //     }
    // }


    async destroy(req, res){
        let id = req.params.id;
        try{
            let findUser = await User.findById(id);
            if(findUser){
                let fileDelete = true;
                let userImage = findUser.image;
                if(userImage){
                    let filePath = `public/users/${userImage}`;
                    let fileResponse = checkFileExistsSync(filePath);
                    
                    if(fileResponse){
                        fs.unlinkSync(filePath);
                    }
                    fileDelete = true;
                    
                }
                findUser.deleteOne();
                return res.json({message: 'User deleted successfully'});

            }else{
                return res.json({message: 'User not found.'});
            }
        }catch(err){
            console.log(err);
        }
    }
}


export default UserController;