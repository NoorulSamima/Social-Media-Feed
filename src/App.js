import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import Feed from "./components/Feed";
import NewPost from "./components/NewPost";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
    const [user, setUser] = useState(null);

    // Monitor authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return unsubscribe; // Cleanup listener on component unmount
    }, []);

    return (
        <Router>
            <div>
                {/* Show Navbar only if user is logged in */}
                {user && <Navbar />}
                <Routes>
                    {/* Conditional Routing Based on Authentication */}
                    {user ? (
                        <>
                            <Route path="/" element={<Feed />} />
                            <Route path="/newpost" element={<NewPost />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </>
                    ) : (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<Navigate to="/login" />} />
                        </>
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
