import mongoose from "mongoose"

const ContactUsSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,  
    },
    message: {
        type: String,
        required: true,  
    },
    isAnswer: {
        type: Boolean,
        default: false,
    }
})

export default mongoose.models.ContactUs || mongoose.model('ContactUs' , ContactUsSchema);