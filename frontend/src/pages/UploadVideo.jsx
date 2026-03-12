import { useState } from "react";
import API from "../services/api";

function UploadVideo() {

    const [title, setTitle] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [description, setDescription] = useState("");
    const [videoUrl, setVideoUrl] = useState("");

    const uploadVideo = async () => {

        try {

            await API.post("/videos", {

                title,
                thumbnailUrl,
                description,
                videoUrl,
                uploader: "Adarsh",
                views: 0,
                likes: 0,
                dislikes: 0,
                category: "Education",
                channelId: "CHANNEL_ID"

            });

            alert("Video uploaded successfully");

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div>

            <h2>Upload Video</h2>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Thumbnail URL"
                value={thumbnailUrl}
                onChange={(e) => setThumbnailUrl(e.target.value)}
            />

            <br /><br />

            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Video URL"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
            />

            <br /><br />

            <button onClick={uploadVideo}>
                Upload Video
            </button>

        </div>

    )

}

export default UploadVideo;