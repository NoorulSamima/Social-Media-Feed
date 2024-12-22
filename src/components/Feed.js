import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { firestore } from "../firebase";
import Post from "./Post";

const Feed = ({ user }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const q = query(collection(firestore, "posts"), orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const postsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setPosts(postsData);
        });

        return unsubscribe;
    }, []);

    const handleLike = async (postId) => {
        // Like functionality
    };

    return (
        <div className="feed">
            {posts.map((post) => (
                <Post key={post.id} post={post} onLike={handleLike} user={user} />
            ))}
        </div>
    );
};

export default Feed;
