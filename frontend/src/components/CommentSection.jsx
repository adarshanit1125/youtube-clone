import { useEffect, useState } from "react";
import API from "../services/api";

function CommentSection({ videoId }) {

    const [comments, setComments] = useState([]);
    const [text, setText] = useState("");

    // Fetch comments
    useEffect(() => {

        API.get(`/comments/${videoId}`)
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setComments(res.data);
                } else {
                    setComments([]);
                }
            })
            .catch((err) => {
                console.log(err);
            });

    }, [videoId]);


    // Add comment
    const addComment = async () => {

        if (!text.trim()) return;

        try {

            const res = await API.post("/comments", {
                videoId: videoId,
                userId: "user01",
                text: text
            });

            setComments([...comments, res.data]);
            setText("");

        } catch (error) {
            console.log(error);
        }

    };

    return (

        <div style={{ marginTop: "20px" }}>

            <h3>Comments</h3>

            {/* Comment Input */}

            <input
                type="text"
                placeholder="Add a comment..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ padding: "8px", width: "300px" }}
            />

            <button
                onClick={addComment}
                style={{ marginLeft: "10px", padding: "8px 15px" }}
            >
                Post
            </button>


            {/* Comment List */}

            <div style={{ marginTop: "20px" }}>

                {comments.length === 0 && <p>No comments yet</p>}

                {comments.map((comment) => (

                    <div
                        key={comment._id}
                        style={{
                            borderBottom: "1px solid #ddd",
                            padding: "10px 0"
                        }}
                    >
                        <p>{comment.text}</p>
                    </div>

                ))}

            </div>

        </div>

    );

}

export default CommentSection;