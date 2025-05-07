import mongoose from "mongoose";

const stateSchema = new mongoose.Schema({
    state: {
        type: String,
        default: null
    },
    status: {
        type: Number,
        default: 1
    }

},{timestamps:true})

const stateModel = mongoose.models.stateModel || new mongoose.model("stateModel", stateSchema);
export default stateModel;
