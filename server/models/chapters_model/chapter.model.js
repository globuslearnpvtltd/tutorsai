import mongoose from 'mongoose';


const ChapterSchema = new mongoose.Schema({
    chapterName: { type: String, required: true },
    description: {type: String},
    courseId: {type: mongoose.Schema.Types.ObjectId, ref:'course'},
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('chapter',ChapterSchema,'chapter');