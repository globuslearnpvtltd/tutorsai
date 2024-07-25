import mongoose , {Schema} from 'mongoose';


const TokenSchema = new Schema({
    userId: { type: String, required: true },
    token: { type: String, required: true },
    createdAt:{type:Date,default:Date.now,expires :3600}
});

export default mongoose.model('token',TokenSchema,'token');