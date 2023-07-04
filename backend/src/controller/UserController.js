import User from '../models/User';

class UserController{
    async index(req, res){
        return res.send('User Controller...');
    }


    async store(req, res){
        try{
            // const user = await User.create(req.body);
            const user = await User.create({...req.body});
            return res.send(user).json();
        }catch(err){
            console.log(err);
        }
    }
}


export default UserController;