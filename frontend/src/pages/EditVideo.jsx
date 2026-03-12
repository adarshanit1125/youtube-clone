import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function EditVideo() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [videoUrl, setVideoUrl] = useState("");

    useEffect(() => {

        API.get(`/videos/${id}`)
            .then(res => {

                setTitle(res.data.title);
                setDescription(res.data.description);
                setThumbnailUrl(res.data.thumbnailUrl);
                setVideoUrl(res.data.videoUrl);

            });

    }, [id]);

    const updateVideo = async () => {

        try {

            await API.put(`/videos/${id}`, {

                title,
                description,
                thumbnailUrl,
                videoUrl

            });

            alert("Video updated successfully");

            navigate("/");

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div>

            <h2>Edit Video</h2>

            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />

            <br /><br />

            <input
                type="text"
                value={thumbnailUrl}
                onChange={(e) => setThumbnailUrl(e.target.value)}
                placeholder="Thumbnail URL"
            />

            <br /><br />

            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />

            <br /><br />

            <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Video URL"
            />

            <br /><br />

            <button onClick={updateVideo}>
                Update Video
            </button>

        </div>

    )

}

export default EditVideo;