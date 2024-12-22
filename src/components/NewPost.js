import React, { useState } from "react";
import { firestore, auth } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function NewPost() {
    const [text, setText] = useState("");
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!auth.currentUser) {
            setError("You must be logged in to create a post.");
            return;
        }

        if (!text && images.length === 0) {
            setError("Post must contain text or at least one image.");
            return;
        }

        try {
            const postRef = collection(firestore, "posts");
            const post = {
                text,
                images: [], // TODO: Handle image upload to Firebase Storage
                userId: auth.currentUser.uid,
                createdAt: serverTimestamp(),
            };

            await addDoc(postRef, post);
            setText("");
            setImages([]);
            alert("Post created successfully!");
        } catch (err) {
            console.error("Error creating post:", err);
            setError("Failed to create post. Please try again.");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Create a New Post</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="What's on your mind?"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{ width: "80%", height: "100px", marginBottom: "20px" }}
                />
                <br />
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    style={{ marginBottom: "20px" }}
                />
                <br />
                <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" }}>
                    Post
                </button>
            </form>
        </div>
    );
}

export default NewPost;
