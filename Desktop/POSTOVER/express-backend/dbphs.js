import mongoose from 'mongoose';

const dbSchema = mongoose.Schema({
    name:String,
    imgUrl:String
});

export default mongoose.model('contents',dbSchema);