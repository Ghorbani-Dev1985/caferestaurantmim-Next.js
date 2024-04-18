import mongoose from "mongoose"

const ContactUsSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,  
    },
    isCompleted: {
        type: Boolean,
        default: false,
    }
})

export default mongoose.models.ContactUs || mongoose.model('ContactUs' , ContactUsSchema);