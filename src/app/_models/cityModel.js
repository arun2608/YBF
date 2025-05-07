import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    state: {
        type: String,
        default: null
    },
    district: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    status: {
        type: Number,
        default: 1
    }

},{timestamps:true})

const cityModel = mongoose.models.cityModel || new mongoose.model("cityModel", citySchema);
export default cityModel;
