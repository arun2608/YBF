import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    mobile: {
        type: String,
        default: null
    },  
    role: {
        type: Number,
        default: null
    }, 
    password: {
        type: String,
        default: null
    },    
    status: {
        type: Number,
        default: 1
    }

},{timestamps:true})

const adminModel = mongoose.models.adminModel || new mongoose.model("adminModel", adminSchema);
export default adminModel;
