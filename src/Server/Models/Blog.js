import mongoose from "mongoose"

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,  
    },
    content: {
        type: String,
        required: true,  
    },
    date: {
        type: String,
        default: new Date(Date.now()).toISOString(),
    }
})

export default mongoose.models.Blog || mongoose.model('Blog' , BlogSchema);