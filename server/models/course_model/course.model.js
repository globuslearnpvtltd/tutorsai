import mongoose from 'mongoose';


const CourseSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    description: {type: String},
    price: {type: Number},
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('course',CourseSchema,'course');