import { useState } from "react";
import API from "../services/api";

function Channel() {

    const [channelName, setChannelName] = useState("");
    const [description, setDescription] = useState("");

    const createChannel = async () => {

        try {

            const res = await API.post("/channels", {
                channelName,
                owner: "user01",
                description
            });

            console.log(res.data);

            alert("Channel created successfully");

            setChannelName("");
            setDescription("");

        } catch (error) {

            console.log(error);
            alert("Error creating channel");

        }

    };

    return (

        <div>

            <h2>Create Channel</h2>

            <input
                type="text"
                placeholder="Channel Name"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
            />

            <br /><br />

            <textarea
                placeholder="Channel Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <br /><br />

            <button onClick={createChannel}>
                Create Channel
            </button>

        </div>

    )

}

export default Channel;