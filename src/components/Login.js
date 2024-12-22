import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
            console.log("Logged in successfully!");
        } catch (error) {
            console.error("Login failed:", error.message);
        }
    };

    return (
        <div>
            <h1>Welcome to the Social Media App</h1>
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
}

export default Login;
