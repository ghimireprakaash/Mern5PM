import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male','Female'],
    },
    role: {
        type: String,
        enum: ['user','admin'],
        default: 'user',
    },
    image: {
        type: String,
        default: null,
    },
},{
    versionKey: false,
});


userSchema.pre('save', function(next){
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password, 12);
    }

    return next();
})


userSchema.methods.toJSON = function(){
    let obj = this.toObject();
    if(obj.image){
        obj.image = `${process.env.HTTP_SERVER}/users/${obj.image}`;
    }

    delete obj.password;

    return obj;
}


userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}


userSchema.methods.generateToken = function(){
    return jwt.sign(
        {id: this._id},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRE}
    );
}


const User = mongoose.model('User', userSchema);

export default User;