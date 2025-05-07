import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
    country: {
        type: String,
        default: null
    },
    status: {
        type: Number,
        default: 1
    }

},{timestamps:true})

const countryModel = mongoose.models.countryModel || new mongoose.model("countryModel", countrySchema);
export default countryModel;
