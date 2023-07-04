import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
        enum: ['male','female'],
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
    if(!this.isModified('password')){
        return next();
    }

    this.password = bcrypt.hashSync(this.password.bcrypt);
})


const User = mongoose.model('User', userSchema);

export default User;


//Using CommonJS
// module.exports 