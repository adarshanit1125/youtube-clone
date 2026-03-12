import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    thumbnailUrl: {
        type: String
    },

    description: {
        type: String
    },

    videoUrl: {
        type: String,
        required: true
    },

    uploader: {
        type: String
    },

    views: {
        type: Number,
        default: 0
    },

    likes: {
        type: Number,
        default: 0
    },

    dislikes: {
        type: Number,
        default: 0
    },

    category: {
        type: String
    },

    channelId: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

export default mongoose.model("Video", videoSchema);