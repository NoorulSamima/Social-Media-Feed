import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Ensure the user data is fetched from Firebase Auth
        const currentUser = auth.currentUser;
        if (currentUser) {
            setUser(currentUser);
        }
    }, []);

    if (!user) {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Loading Profile...</h1>
                <p>Please ensure you're logged in.</p>
            </div>
        );
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome to Your Profile</h1>
            <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt="Profile"
                style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    marginBottom: "20px",
                }}
            />
            <h2>{user.displayName || "No Name"}</h2>
            <p>Email: {user.email}</p>
            <p>User ID: {user.uid}</p>
        </div>
    );
}

export default Profile;
