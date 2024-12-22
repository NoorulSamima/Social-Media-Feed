import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
    return (
        <nav className="navbar">
            <h1>Social Media Feed</h1>
            <ul>
                <li class="list"><Link class="list" to="/">Feed</Link></li>
                <li class="list"><Link class="list" to="/newpost">New Post</Link></li>
                <li class="list"><Link class="list" to="/profile">Profile</Link></li>
            </ul>
            <button onClick={onLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;
