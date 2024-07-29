import mongoose from 'mongoose';


const LearnerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String},
    password: { type: String },
    selectedAvatar: {type: mongoose.Schema.Types.ObjectId, ref:'avatar'},
}, { timestamps: true });

export default mongoose.model('learner',LearnerSchema,'learner');