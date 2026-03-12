import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({

    channelName: String,
    owner: String,
    description: String,
    subscribers: {
        type: Number,
        default: 0
    }

});

export default mongoose.model("Channel", channelSchema);