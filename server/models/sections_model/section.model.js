import mongoose from 'mongoose';

const SectionSchema = new mongoose.Schema({
    sectionName: { type: String, required: true },
    description: {type: String},
    sectionpdf: {type: String},
    courseId: {type: mongoose.Schema.Types.ObjectId, ref:'course'},
    chapterId:{type: mongoose.Schema.Types.ObjectId, ref:'chapter'},
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('section',SectionSchema,'section');