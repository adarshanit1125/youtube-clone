import express from "express";
import Channel from "../models/Channel.js";

const router = express.Router();


// GET ALL CHANNELS
router.get("/", async (req, res) => {

    try {

        const channels = await Channel.find();

        res.json(channels);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

});


// CREATE CHANNEL
router.post("/", async (req, res) => {

    try {

        const channel = new Channel(req.body);

        const savedChannel = await channel.save();

        res.status(201).json(savedChannel);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

});


// GET SINGLE CHANNEL
router.get("/:id", async (req, res) => {

    try {

        const channel = await Channel.findById(req.params.id);

        res.json(channel);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

});

export default router;