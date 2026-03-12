import express from "express";
import mongoose from "mongoose";
import Video from "../models/Video.js";

const router = express.Router();


// GET all videos + search
router.get("/", async (req, res) => {

    try {

        const search = req.query.search || "";

        const videos = await Video.find({
            title: { $regex: search, $options: "i" }
        });

        res.json(videos);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

});


// GET single video
router.get("/:id", async (req, res) => {

    try {

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid video id" });
        }

        const video = await Video.findById(id);

        if (!video) {
            return res.status(404).json({ message: "Video not found" });
        }

        res.json(video);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

});


// GET videos by channel
router.get("/channel/:channelId", async (req, res) => {

    try {

        const videos = await Video.find({
            channelId: req.params.channelId
        });

        res.json(videos);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

});


// POST upload video
router.post("/", async (req, res) => {

    try {

        const video = new Video(req.body);

        const savedVideo = await video.save();

        res.status(201).json(savedVideo);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

});


// UPDATE video
router.put("/:id", async (req, res) => {

    try {

        const updatedVideo = await Video.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedVideo);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

});


// DELETE video
router.delete("/:id", async (req, res) => {

    try {

        await Video.findByIdAndDelete(req.params.id);

        res.json({ message: "Video deleted successfully" });

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

});

export default router;