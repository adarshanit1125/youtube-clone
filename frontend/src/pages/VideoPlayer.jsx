import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import CommentSection from "../components/CommentSection";

function VideoPlayer() {

    const { id } = useParams();

    const [video, setVideo] = useState(null);

    useEffect(() => {

        API.get(`/videos/${id}`)
            .then(res => setVideo(res.data))
            .catch(err => console.log(err));

    }, [id]);

    if (!video) {

        return <p>Loading video...</p>;

    }

    return (

        <div>

            {/* VIDEO */}

            <video width="900" controls key={video.videoUrl}>
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support video.
            </video>

            {/* TITLE */}

            <h2>{video.title}</h2>

            {/* VIDEO INFO */}

            <div style={{ display: "flex", gap: "20px" }}>

                <p>{video.views} views</p>

                <button>👍 Like</button>

                <button>👎 Dislike</button>

            </div>

            {/* DESCRIPTION */}

            <p>{video.description}</p>

            <hr />
            <CommentSection videoId={id} />
            {/* COMMENTS */}

            <h3>Comments</h3>

            <p>No comments yet</p>

        </div>

    )

}

export default VideoPlayer;