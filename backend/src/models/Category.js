import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name:{
        type: String,
        required: true,
        unique: true,
    },
    slug:{
        type: String,
        required: true,
        unique: true,
    },
}, {
    versionKey: false,
});


export default mongoose.model('Category', categorySchema);
