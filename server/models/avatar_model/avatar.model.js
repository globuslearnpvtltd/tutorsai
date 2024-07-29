import mongoose from 'mongoose';


const AvatarSchema = new mongoose.Schema({
    avatarName: { type: String, required: true },
    avatarImage: { type: String},
    avatarVideo: { type: String},
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('avatar',AvatarSchema,'avatar');