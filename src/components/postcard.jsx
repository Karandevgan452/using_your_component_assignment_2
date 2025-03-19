import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        width: "300px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={post.profileImage}
          alt="Profile"
          width="40"
          height="40"
          style={{ borderRadius: "50%" }}
        />
        <h4>{post.username}</h4>
      </div>
      <p>{post.content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;
