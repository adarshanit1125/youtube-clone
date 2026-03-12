import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import { Link } from "react-router-dom";
function ChannelPage() {

    const { id } = useParams();

    const [channel, setChannel] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        API.get(`/channels/${id}`)
            .then(res => setChannel(res.data));

        API.get(`/videos/channel/${id}`)
            .then(res => setVideos(res.data));

    }, [id]);

    const deleteVideo = async (videoId) => {

        try {

            await API.delete(`/videos/${videoId}`);

            setVideos(videos.filter(v => v._id !== videoId));

        } catch (error) {

            console.log(error);

        }

    };

    if (!channel) {
        return <p>Loading channel...</p>;
    }

    return (

        <div>

            <h2>{channel.channelName}</h2>
            <p>{channel.description}</p>

            <h3>Channel Videos</h3>

            {videos.map(video => (

                <div key={video._id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>

                    <h4>{video.title}</h4>

                    <p>{video.views} views</p>

                    <button onClick={() => deleteVideo(video._id)}>
                        Delete Video
                    </button>

                </div>

            ))}

        </div>

    )

}

export default ChannelPage;