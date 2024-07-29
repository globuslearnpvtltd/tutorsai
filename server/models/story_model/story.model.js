import mongoose from 'mongoose';


const StorySchema = new mongoose.Schema({
    courseId: {type: mongoose.Schema.Types.ObjectId, ref:'course'},
    chapterId: {type: mongoose.Schema.Types.ObjectId, ref:'chapter'},
    sectionId: {type: mongoose.Schema.Types.ObjectId, ref:'section'},
    isActive: { type: Boolean, default: true },
    isVerified:{ type: Boolean, default: false },
    level:{type: Number}
}, { timestamps: true });

export default mongoose.model('story',StorySchema,'story');