import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import API from "../services/api";
import "../styles/home.css";

function Home() {

    const [videos, setVideos] = useState([]);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const search = params.get("search") || "";

    useEffect(() => {

        API.get(`/videos?search=${search}`)
            .then(res => setVideos(res.data))
            .catch(err => console.log(err));

    }, [search]);

    return (

        <div className="home">

            {/* FILTER BUTTONS */}

            <div className="filters">

                <button onClick={() => window.location.href = "/"}>All</button>
                <button onClick={() => window.location.href = "/?search=react"}>React</button>
                <button onClick={() => window.location.href = "/?search=node"}>Node</button>
                <button onClick={() => window.location.href = "/?search=javascript"}>JavaScript</button>
                <button onClick={() => window.location.href = "/?search=css"}>CSS</button>

            </div>


            {/* VIDEO GRID */}

            <div className="video-grid">

                {videos.map(video => (

                    <Link to={`/video/${video._id}`} key={video._id} className="video-link">

                        <div className="video-card">

                            <img
                                src={video.thumbnailUrl}
                                alt={video.title}
                                className="thumbnail"
                            />

                            <div className="video-info">

                                <h3>{video.title}</h3>

                                <p>{video.views} views</p>

                            </div>

                        </div>

                    </Link>

                ))}

            </div>

        </div>

    )

}

export default Home;    