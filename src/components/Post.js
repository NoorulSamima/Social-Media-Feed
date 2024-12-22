import React from "react";

const Post = ({ post, onLike, user }) => {
    const isLiked = post.likes?.includes(user.uid);

    return (
        <div className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {post.mediaUrl && post.mediaType === "image" ? (
                <img src={post.mediaUrl} alt="Post" style={{ maxWidth: "100%" }} />
            ) : (
                <video src={post.mediaUrl} controls style={{ maxWidth: "100%" }} />
            )}
            <button onClick={() => onLike(post.id)} disabled={isLiked}>
                {isLiked ? "Liked" : "Like"} ({post.likes?.length || 0})
            </button>
        </div>
    );
};

export default Post;
