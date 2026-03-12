import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {

    return (

        <div className="sidebar">

            <Link to="/">Home</Link>

            <Link to="/upload">Upload Video</Link>

            <Link to="/channel">Create Channel</Link>

            <Link to="/login">Login</Link>

        </div>

    )

}

export default Sidebar;