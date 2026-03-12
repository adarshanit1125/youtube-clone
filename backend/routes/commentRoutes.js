import express from "express";

const router = express.Router();

// Add comment
router.post("/", (req, res) => {
    res.json({ message: "Comment added" });
});

// Get comments for video
router.get("/:videoId", (req, res) => {
    res.json({ message: "Comments fetched" });
});

// Update comment
router.put("/:id", (req, res) => {
    res.json({ message: "Comment updated" });
});

// Delete comment
router.delete("/:id", (req, res) => {
    res.json({ message: "Comment deleted" });
});

export default router;