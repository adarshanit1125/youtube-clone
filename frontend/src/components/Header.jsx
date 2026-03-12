import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/header.css";

function Header() {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {

        if (e.key === "Enter") {
            navigate(`/?search=${search}`);
        }

    };

    return (

        <div className="header">

            <div className="logo">
                <Link to="/">YouTube Clone</Link>
            </div>

            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
                className="search-box"
            />

            <div className="header-links">

                <Link to="/upload">Upload</Link>

                <Link to="/login">Login</Link>

                <Link to="/register">Register</Link>

            </div>

        </div>

    )

}

export default Header;